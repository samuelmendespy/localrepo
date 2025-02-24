from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from .models import Rental
from .serializers import RentalSerializer
from .services import create_rental
from cars.models import Car
from renters.models import Renter

class RentalViewSet(viewsets.ModelViewSet):
    """Rental CRUD with list, create, retrieve and update"""
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer

    def create(self, request, *args, **kwargs):        
      if request.method == "OPTIONS":
          return Response({
              "allowed_methods": ["POST", "OPTIONS"],
              "description": "Create a new rental.",
              "fields": {
                  "car": {"type": "integer", "required": True, "help_text": "Car ID to be rented."},
                  "renter": {"type": "integer", "required": True, "help_text": "Car renter ID."},
                  "start_date": {"type": "string", "required": True, "format": "YYYY-MM-DDTHH:MM:SSZ"},
                  "end_date": {"type": "string", "required": True, "format": "YYYY-MM-DDTHH:MM:SSZ"}
              }
          })
      
      serializer = RentalSerializer(data=request.data)
      if serializer.is_valid():
          car = get_object_or_404(Car, id=request.data['car'])
          renter = get_object_or_404(Renter, id=request.data['renter'])
          start_date = serializer.validated_data['start_date']
          end_date = serializer.validated_data.get('end_date')
          try:
              rental = create_rental(car, renter, start_date, end_date)
              return Response(RentalSerializer(rental).data, status=status.HTTP_201_CREATED)
          except ValidationError as e:
              return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)