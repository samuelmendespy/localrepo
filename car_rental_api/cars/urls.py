from django.urls import path
from . import views

urlpatterns = [
    path('carros/', views.CarroListCreate.as_view()),
    path('carros/<int:pk>/', views.CarroRetrieveUpdateDestroy.as_view()),
]