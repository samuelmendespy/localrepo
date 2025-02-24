from django.db import models

# Create your models here.
class TypeChoices(models.IntegerChoices):
    ATYPE = 1, "A"
    BTYPE = 2, "B"
    CTYPE = 3, "C"
    DTYPE = 4, "D"
    ETYPE = 5, "E"

class Renter(models.Model):
    name = models.CharField(max_length=100)
    license_type = models.IntegerField(choices=TypeChoices.choices, default=TypeChoices.ATYPE)

    def __str__(self):
        return self.name