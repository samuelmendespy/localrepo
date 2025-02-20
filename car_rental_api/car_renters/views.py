from django.shortcuts import render
from rest_framework import generics
from cars.models import Car
from .models import CarRenter
from .serializers import CarRenterSerializer

# Create your views here.
class LocatarioListCreate(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarRenterSerializer

class LocatarioRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarRenterSerializer