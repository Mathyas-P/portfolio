from django.urls import path
from .views import ContactMessageCreateView, home

urlpatterns = [
    path('', home, name='api_home'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact_create'),
]
