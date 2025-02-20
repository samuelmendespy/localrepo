from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import CarRenter
from .serializers import CarRenterSerializer

# Create your views here.
@api_view(['GET'])
def renter_list(request):
    """List all car renters."""
    renters = CarRenter.objects.all()
    serializer = CarRenterSerializer(renters, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def renter_create(request):
    """Create a new car renter."""
    serializer = CarRenterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def renter_detail(request, pk):
    """Retrieve a car renter by ID."""
    renter = get_object_or_404(CarRenter, pk=pk)
    serializer = CarRenterSerializer(renter)
    return Response(serializer.data)

@api_view(['PUT'])
def renter_update(request, pk):
    """Update a car renter."""
    renter = get_object_or_404(CarRenter, pk=pk)
    serializer = CarRenterSerializer(renter, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def renter_delete(request, pk):
    """Delete a car renter."""
    renter = get_object_or_404(CarRenter, pk=pk)
    renter.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)