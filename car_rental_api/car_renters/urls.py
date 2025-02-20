from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarRenterViewSet

router = DefaultRouter()
router.register(r'renters', CarRenterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]