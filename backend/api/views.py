import os
import resend
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.http import HttpResponse


def home(request):
    return HttpResponse("API is running")


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # Send email via Resend HTTP API (works on Render free tier — no SMTP needed)
        try:
            resend.api_key = os.environ.get("RESEND_API_KEY")

            resend.Emails.send({
                "from": "Portfolio Contact <onboarding@resend.dev>",
                "to": [os.environ.get("CONTACT_EMAIL")],
                "subject": f"Portfolio Message from {instance.name}",
                "text": (
                    f"Name: {instance.name}\n"
                    f"Email: {instance.email}\n\n"
                    f"Message:\n{instance.message}"
                ),
            })
            print("EMAIL SENT SUCCESSFULLY via Resend")
        except Exception as e:
            print(f"EMAIL ERROR: {e}")
