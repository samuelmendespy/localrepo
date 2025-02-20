from django.db import models

# Create your models here.
class RendaChoices(models.IntegerChoices):
    BAD = 1, "Bad"
    GOOD = 2, "Good"
    PERFECT = 3, "Perfect"

class CarRenter(models.Model):
    name = models.CharField(max_length=100)
    renda = models.IntegerField(choices=RendaChoices.choices, default=RendaChoices.BAD)

    def __str__(self):
        return self.name