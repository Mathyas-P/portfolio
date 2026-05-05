from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings
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

        # Send email synchronously so it completes before the response
        try:
            send_mail(
                subject=f"Portfolio Message from {instance.name}",
                message=(
                    f"Name: {instance.name}\n"
                    f"Email: {instance.email}\n"
                    f"Message:\n{instance.message}"
                ),
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            print("EMAIL SENT SUCCESSFULLY")
        except Exception as e:
            # Log the error — visible in Render logs
            print(f"EMAIL ERROR: {e}")
