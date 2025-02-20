from django.urls import path
from .views import renter_list, renter_create, renter_detail, renter_update, renter_delete

urlpatterns = [
    path('renters/', renter_list, name='renter-list'),
    path('renters/create/', renter_create, name='renter-create'),
    path('renters/<int:pk>/', renter_detail, name='renter-detail'),
    path('renters/<int:pk>/update/', renter_update, name='renter-update'),
    path('renters/<int:pk>/delete/', renter_delete, name='renter-delete'),
]