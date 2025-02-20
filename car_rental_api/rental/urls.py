from django.urls import path
from . import views
from .views import rental_list, rental_create, rental_detail, rental_delete

urlpatterns = [
    path('', rental_list, name='rental-list'),
    path('create/', rental_create, name='rental-create'),
    path('<int:pk>/', rental_detail, name='rental-detail'),
    path('<int:pk>/delete/', rental_delete, name='rental-delete'),
    
]