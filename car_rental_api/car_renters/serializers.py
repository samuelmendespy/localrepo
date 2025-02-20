from rest_framework import serializers
from .models import CarRenter

class CarRenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarRenter
        fields = '__all__'