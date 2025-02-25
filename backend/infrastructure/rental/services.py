from django.core.exceptions import ValidationError
from datetime import datetime
from .models import Rental
from cars.models import Car
from renters.models import Renter

def validate_rental(car: Car, renter: Renter, start_date: datetime):
    """Validates rental conditions before creating a rental."""

    if renter.license_type < car.minimun_license_type:
        raise ValidationError("Your license level is too low to rent this car.")

    # Check if the renter has already rented a car today
    existing_rental = Rental.objects.filter(
        renter=renter, start_date__date=start_date.date()
    ).exists()

    if existing_rental:
        raise ValidationError("You can only rent one car per day.")

def create_rental(car: Car, renter: Renter, start_date: datetime, end_date: datetime = None):
    """Creates a rental and sets the car as rented."""
    validate_rental(car, renter, start_date)

    rental = Rental.objects.create(
        car=car,
        renter=renter,
        start_date=start_date,
        end_date=end_date
    )

    car.save()
    
    return rental
