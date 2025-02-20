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

@api_view(['GET', 'OPTIONS'])
def rental_list(request):
    """List all rentals."""
    if request.method == "OPTIONS":
        return Response({
            "allowed_methods": ["GET", "OPTIONS"],
            "description": "Retrieve a list of all rentals.",
        })
    
    rentals = Rental.objects.all()
    serializer = RentalSerializer(rentals, many=True)
    return Response(serializer.data)

@api_view(['POST', 'OPTIONS'])
def rental_create(request):
    """Create a new rental, enforcing business rules."""
    if request.method == "OPTIONS":
        return Response({
            "allowed_methods": ["POST", "OPTIONS"],
            "description": "Create a new rental.",
            "fields": {
                "car": {"type": "integer", "required": True, "help_text": "Car ID to be rented."},
                "renter": {"type": "integer", "required": True, "help_text": "Car renter ID."},
                "start_date": {"type": "string", "required": True, "format": "YYYY-MM-DDTHH:MM:SSZ"},
                "end_date": {"type": "string", "required": False, "help_text": "End date of rental (optional)."}
            }
        })
    
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

@api_view(['GET', 'OPTIONS'])
def rental_detail(request, pk):
    """Retrieve a rental by ID."""
    if request.method == "OPTIONS":
        return Response({
            "allowed_methods": ["GET", "OPTIONS"],
            "description": "Retrieve a rental by ID.",
            "fields": {
                "rental": {"type": "integer", "required": True, "help_text": "Rental ID to be retrieved."}
            }
        })
    
    rental = get_object_or_404(Rental, pk=pk)
    serializer = RentalSerializer(rental)
    return Response(serializer.data)

@api_view(['DELETE', 'OPTIONS'])
def rental_delete(request, pk):
    """Delete a rental and mark the car as available again."""
    if request.method == "OPTIONS":
        return Response({
            "allowed_methods": ["DELETE", "OPTIONS"],
            "description": "Delete a rental by ID and mark the car as available again.",
            "fields": {
                "rental": {"type": "integer", "required": True, "help_text": "Rental ID to be deleted."}
            }
        })
    
    rental = get_object_or_404(Rental, pk=pk)
    rental.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)