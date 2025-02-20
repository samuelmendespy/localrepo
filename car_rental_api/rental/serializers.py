from rest_framework import serializers
from .models import Rental
from car_renters.serializers import CarRenterSerializer
from cars.serializers import CarSerializer

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'