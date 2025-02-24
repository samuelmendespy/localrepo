from django.urls import path, include

urlpatterns = [
    path('api/renters/', include('renters.urls')),
    path('api/cars/', include('cars.urls')),
    path('api/rentals/', include('rental.urls')),
]