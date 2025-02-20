from django.urls import path
from . import views

urlpatterns = [
    path('carros/<int:carro_id>/atribuir/<int:locatario_id>/', views.atribuir_locatario),
]