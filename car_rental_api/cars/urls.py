from django.urls import path
from .views import car_list, car_create, car_detail, car_update, car_delete

urlpatterns = [
    path('cars/', car_list, name='car-list'),
    path('cars/create/', car_create, name='car-create'),
    path('cars/<int:pk>/', car_detail, name='car-detail'),
    path('cars/<int:pk>/update/', car_update, name='car-update'),
    path('cars/<int:pk>/delete/', car_delete, name='car-delete'),
]