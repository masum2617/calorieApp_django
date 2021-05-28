from django.urls import path, include
from . import views


urlpatterns = [
    
    path('', views.index, name='calorie_index'),
    path('calories/', views.calories, name='calories'),
   
]