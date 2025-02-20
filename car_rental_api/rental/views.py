from rest_framework import generics
from .models import Carro, Locatario
from .serializers import CarroSerializer, LocatarioSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class CarroListCreate(generics.ListCreateAPIView):
    queryset = Carro.objects.all()
    serializer_class = CarroSerializer

class CarroRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Carro.objects.all()
    serializer_class = CarroSerializer

class LocatarioListCreate(generics.ListCreateAPIView):
    queryset = Locatario.objects.all()
    serializer_class = LocatarioSerializer

class LocatarioRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Locatario.objects.all()
    serializer_class = LocatarioSerializer

@api_view(['POST'])
def atribuir_locatario(request, carro_id, locatario_id):
    try:
        carro = Carro.objects.get(pk=carro_id)
        locatario = Locatario.objects.get(pk=locatario_id)
    except Carro.DoesNotExist:
        return Response({'error': 'Carro não encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Locatario.DoesNotExist:
        return Response({'error': 'Locatário não encontrado'}, status=status.HTTP_404_NOT_FOUND)

    if locatario.renda < carro.renda_minima:
        return Response({'error': 'Renda insuficiente'}, status=status.HTTP_400_BAD_REQUEST)

    carro.locatario = locatario
    carro.save()
    return Response({'message': 'Locatário atribuído com sucesso'}, status=status.HTTP_200_OK)