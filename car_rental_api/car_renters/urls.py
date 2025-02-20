from django.urls import path
from . import views

urlpatterns = [
    path('locatarios/', views.LocatarioListCreate.as_view()),
    path('locatarios/<int:pk>/', views.LocatarioRetrieveUpdateDestroy.as_view()),
]