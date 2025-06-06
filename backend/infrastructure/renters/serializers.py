from rest_framework import serializers
from .models import Renter

class RenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Renter
        fields = '__all__'