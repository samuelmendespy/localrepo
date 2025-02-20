from django.db import models

# Create your models here.
class Locatario(models.Model):
    nome = models.CharField(max_length=100)
    renda = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome

class Carro(models.Model):
    codigo = models.CharField(max_length=20, unique=True)
    renda_minima = models.DecimalField(max_digits=10, decimal_places=2)
    locatario = models.OneToOneField(Locatario, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.codigo