
from django.contrib import admin
from . models import Dairy, Fish, Fruit, Grain, Meat, Vegetable

# Register your models here.
admin.site.register(Vegetable)
admin.site.register(Fruit)
admin.site.register(Dairy)
admin.site.register(Grain)
admin.site.register(Fish)
admin.site.register(Meat)
