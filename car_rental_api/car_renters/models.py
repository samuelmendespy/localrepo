from django.db import models

# Create your models here.
class CarRenter(models.Model):
    name = models.CharField(max_length=100)
    renda = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name