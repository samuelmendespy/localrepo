from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import Rental
from .serializers import RentalSerializer
from cars.models import Car
from car_renters.models import CarRenter

class RentalViewSet(viewsets.ModelViewSet):
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer

@api_view(['POST'])
def atribuir_locatario(request, carro_id, locatario_id):
    try:
        carro = Car.objects.get(pk=carro_id)
        locatario = CarRenter.objects.get(pk=locatario_id)
    except Car.DoesNotExist:
        return Response({'error': 'Car not found'}, status=status.HTTP_404_NOT_FOUND)
    except CarRenter.DoesNotExist:
        return Response({'error': 'Car renter not found'}, status=status.HTTP_404_NOT_FOUND)

    if locatario.renda < carro.renda_minima:
        return Response({'error': 'Car renter has insufficient renda'}, status=status.HTTP_400_BAD_REQUEST)

    carro.locatario = locatario
    carro.save()
    return Response({'message': 'Sucessfully assigned car renter to the car'}, status=status.HTTP_200_OK)