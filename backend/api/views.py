from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.http import HttpResponse

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


    def home(request):
        return HttpResponse("API is running")

    def perform_create(self, serializer):
        instance = serializer.save()
        # send_mail(
        #     subject=f"New Message from Portfolio - {instance.name}",
        #     message=f"Name: {instance.name}\nEmail: {instance.email}\nMessage: {instance.message}",
        #     from_email=settings.EMAIL_HOST_USER,
        #     recipient_list=[settings.EMAIL_HOST_USER],
        #     fail_silently=False,
        # )

    
