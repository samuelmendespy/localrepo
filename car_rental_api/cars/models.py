from django.db import models

# Create your models here.
class Car(models.Model):
    codigo = models.CharField(max_length=20, unique=True)
    renda_minima = models.DecimalField(max_digits=10, decimal_places=2)
    is_rented = models.BooleanField(default=False)

    def __str__(self):
        return self.codigo