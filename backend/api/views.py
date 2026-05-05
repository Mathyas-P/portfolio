import os
import logging
import resend
from rest_framework import generics, status
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.http import HttpResponse

logger = logging.getLogger(__name__)


def home(request):
    return HttpResponse("API is running")


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        """
        Override create() instead of perform_create() so we can control
        the HTTP response based on whether the email actually sent.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # --- DEBUG: Log incoming payload ---
        logger.info("=== CONTACT FORM SUBMISSION ===")
        logger.info(f"  Name:    {serializer.validated_data.get('name')}")
        logger.info(f"  Email:   {serializer.validated_data.get('email')}")
        logger.info(f"  Message: {serializer.validated_data.get('message', '')[:80]}...")

        # Save to database first
        instance = serializer.save()
        logger.info(f"  DB save: OK (id={instance.id})")

        # --- Validate environment variables ---
        api_key = os.environ.get("RESEND_API_KEY")
        contact_email = os.environ.get("CONTACT_EMAIL")

        if not api_key or api_key == "re_PASTE_YOUR_RESEND_API_KEY_HERE":
            logger.error("RESEND_API_KEY is missing or still set to placeholder!")
            return Response(
                {"error": "Email service not configured. Please set RESEND_API_KEY."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        if not contact_email:
            logger.error("CONTACT_EMAIL is missing from environment!")
            return Response(
                {"error": "Email service not configured. Please set CONTACT_EMAIL."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        # --- DEBUG: Log key existence (never the full key) ---
        logger.info(f"  RESEND_API_KEY: {'SET (' + api_key[:8] + '...)' if api_key else 'MISSING'}")
        logger.info(f"  CONTACT_EMAIL:  {contact_email}")

        # --- Send email via Resend ---
        try:
            resend.api_key = api_key

            email_payload = {
                "from": "Portfolio Contact <onboarding@resend.dev>",
                "to": [contact_email],
                "subject": f"New Contact Form Submission from {instance.name}",
                "html": (
                    f"<h2>New Portfolio Contact Message</h2>"
                    f"<p><strong>Name:</strong> {instance.name}</p>"
                    f"<p><strong>Email:</strong> {instance.email}</p>"
                    f"<p><strong>Message:</strong></p>"
                    f"<p>{instance.message}</p>"
                    f"<hr>"
                    f"<p style='color:#888;font-size:12px;'>"
                    f"Sent via portfolio contact form</p>"
                ),
            }

            logger.info(f"  Sending email to: {contact_email}")
            result = resend.Emails.send(email_payload)
            logger.info(f"  Resend API response: {result}")

            # Verify Resend returned an ID (successful send)
            if result and isinstance(result, dict) and result.get("id"):
                logger.info(f"  EMAIL SENT SUCCESSFULLY — Resend ID: {result['id']}")
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                logger.error(f"  Resend returned unexpected response: {result}")
                return Response(
                    {"error": "Email service returned unexpected response. Please try again."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

        except Exception as e:
            logger.error(f"  EMAIL SEND FAILED: {type(e).__name__}: {e}")
            return Response(
                {"error": f"Failed to send email: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
