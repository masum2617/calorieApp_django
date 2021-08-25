from django.urls import path, include
from . import views


urlpatterns = [
    
   
    path('', views.calories, name='calories'),
    # path('calories/', views.calories, name='calories'),
   
]