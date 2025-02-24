from rest_framework import viewsets
from .models import Renter
from .serializers import RenterSerializer

# Create your views here.
class RenterViewSet(viewsets.ModelViewSet):
    """Renter CRUD with list, create, retrieve and update"""
    queryset = Renter.objects.all()
    serializer_class = RenterSerializer