from django.db import models
from cars.models import Car
from car_renters.models import CarRenter

# Create your models here.
class Rental(models.Model):
    car = models.OneToOneField(Car, on_delete=models.CASCADE)
    renter = models.OneToOneField(CarRenter, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.codigo