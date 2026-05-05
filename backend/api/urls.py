from django.urls import path
from .views import ContactMessageCreateView,home
urlpatterns = [
    path('contact/', ContactMessageCreateView.as_view(), name='contact_create'),
    path('', home),

]
