from django.shortcuts import render
from . models import Dairy, Fish, Fruit, Grain, Meat, Vegetable
# Create your views here.


def calories(request):
    context = {
        'vegetables' : Vegetable.objects.all(),
        'fruits' : Fruit.objects.all(),
        'meats': Meat.objects.all(),
        'grains': Grain.objects.all(),
        'fishes': Fish.objects.all(),
        'dairy' : Dairy.objects.all()
    }
    return render(request, 'calories/calories.html', context)

def index(request):
    return render(request, 'calories/index.html')