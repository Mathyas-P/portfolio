import threading
from rest_framework import generics
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.http import HttpResponse


def home(request):
    return HttpResponse("API is running")


def _send_contact_email(name, email, message):
    """Send email in background thread so the API responds instantly."""
    try:
        from django.core.mail import send_mail

        send_mail(
            subject=f"Portfolio Message from {name}",
            message=f"Name: {name}\nEmail: {email}\nMessage: {message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        print("EMAIL SENT SUCCESSFULLY")

    except Exception as e:
        print("EMAIL ERROR:", str(e))


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # Fire-and-forget: email sends in background, API returns 201 immediately
        thread = threading.Thread(
            target=_send_contact_email,
            args=(instance.name, instance.email, instance.message),
            daemon=True,
        )
        thread.start()
