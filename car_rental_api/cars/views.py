from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Car
from .serializers import CarSerializer

# Create your views here.
@api_view(['GET'])
def car_list(request):
    """List all cars."""
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def car_create(request):
    """Create a new car."""
    serializer = CarSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def car_detail(request, pk):
    """Retrieve a car by ID."""
    car = get_object_or_404(Car, pk=pk)
    serializer = CarSerializer(car)
    return Response(serializer.data)

@api_view(['PUT'])
def car_update(request, pk):
    """Update a car."""
    car = get_object_or_404(Car, pk=pk)
    serializer = CarSerializer(car, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def car_delete(request, pk):
    """Delete a car."""
    car = get_object_or_404(Car, pk=pk)
    car.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)