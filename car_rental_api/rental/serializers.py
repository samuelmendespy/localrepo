from rest_framework import serializers
from .models import Rental
from car_renters.serializers import CarRenterSerializer
from cars.serializers import CarSerializer

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'
    
    def validate(self, data):
        """Enforce rental rules before creating a rental."""
        car = data['car']
        renter = data['renter']

        if car.is_rented:
            raise serializers.ValidationError("This car is already rented.")
        
        if renter.reputation < car.minimum_reputation:
            raise serializers.ValidationError("Your reputation is too low to rent this car.")

        # Check if renter has already rented a car today
        existing_rental = Rental.objects.filter(
            renter=renter, start_date__date=data['start_date'].date()
        ).exists()

        if existing_rental:
            raise serializers.ValidationError("You can only rent one car per day.")

        return data
    
    def create(self, validated_data):
        """Create a rental and mark the car as rented."""
        rental = Rental.objects.create(**validated_data)
        rental.car.is_rented = True
        rental.car.save()
        return rental