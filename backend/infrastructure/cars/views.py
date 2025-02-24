from rest_framework import viewsets
from .models import Car
from .serializers import CarSerializer

# Create your views here.
class CarViewSet(viewsets.ModelViewSet):
    """Car CRUD with list, create, retrieve and update"""
    queryset = Car.objects.all()
    serializer_class = CarSerializer