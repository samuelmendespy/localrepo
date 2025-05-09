from django.db import models
from cars.models import Car
from renters.models import Renter

# Create your models here.
class Rental(models.Model):
    car = models.OneToOneField(Car, on_delete=models.CASCADE)
    renter = models.OneToOneField(Renter, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.renter.name} rented {self.car.codigo} from {self.start_date}"