from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from .models import Rental
from .serializers import RentalSerializer
from .services import create_rental
from cars.models import Car
from car_renters.models import CarRenter

@api_view(['GET'])
def rental_list(request):
    """List all rentals."""
    rentals = Rental.objects.all()
    serializer = RentalSerializer(rentals, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def rental_create(request):
    """Create a new rental, enforcing business rules."""
    serializer = RentalSerializer(data=request.data)
    if serializer.is_valid():
        car = get_object_or_404(Car, id=request.data['car'])
        renter = get_object_or_404(CarRenter, id=request.data['renter'])
        start_date = serializer.validated_data['start_date']
        end_date = serializer.validated_data.get('end_date')

        try:
            rental = create_rental(car, renter, start_date, end_date)
            return Response(RentalSerializer(rental).data, status=status.HTTP_201_CREATED)
        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def rental_detail(request, pk):
    """Retrieve a rental by ID."""
    rental = get_object_or_404(Rental, pk=pk)
    serializer = RentalSerializer(rental)
    return Response(serializer.data)

@api_view(['DELETE'])
def rental_delete(request, pk):
    """Delete a rental and mark the car as available again."""
    rental = get_object_or_404(Rental, pk=pk)
    rental.car.is_rented = False
    rental.car.save()
    rental.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)