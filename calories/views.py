from django.shortcuts import render
from . models import Vegetable
# Create your views here.


def index(request):
    context = {
        'vegetables' : Vegetable.objects.all()
    }
    return render(request, 'calories/index.html', context)
