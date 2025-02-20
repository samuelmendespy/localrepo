from rest_framework import viewsets
from .models import CarRenter
from .serializers import CarRenterSerializer

# Create your views here.
class CarRenterViewSet(viewsets.ModelViewSet):
    """CarRenter CRUD with list, create, retrieve and update"""
    queryset = CarRenter.objects.all()
    serializer_class = CarRenterSerializer