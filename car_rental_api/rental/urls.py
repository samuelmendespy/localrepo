from django.urls import path
from . import views

urlpatterns = [
    path('carros/', views.CarroListCreate.as_view()),
    path('carros/<int:pk>/', views.CarroRetrieveUpdateDestroy.as_view()),
    path('locatarios/', views.LocatarioListCreate.as_view()),
    path('locatarios/<int:pk>/', views.LocatarioRetrieveUpdateDestroy.as_view()),
    path('carros/<int:carro_id>/atribuir/<int:locatario_id>/', views.atribuir_locatario),
]