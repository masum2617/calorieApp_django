from django.db import models

# Create your models here.
class Vegetable(models.Model):
    veg_name = models.CharField(max_length=30)
    veg_cal = models.FloatField()

    def __str__(self):
        return self.veg_name

