from django.db import models

# Create your models here.
class Vegetable(models.Model):
    veg_name = models.CharField(max_length=30)
    veg_cal = models.FloatField()

    def __str__(self):
        return self.veg_name

class Fruit(models.Model):
    fruit_name = models.CharField(max_length=30)
    fruit_cal = models.FloatField()

    def __str__(self):
        return self.fruit_name

class Dairy(models.Model):
    dairy_name = models.CharField(max_length=30)
    dairy_cal = models.FloatField()

    def __str__(self):
        return self.dairy_name

class Fish(models.Model):
    fish_name = models.CharField(max_length=30)
    fish_cal = models.FloatField()

    def __str__(self):
        return self.fish_name

class Grain(models.Model):
    grain_name = models.CharField(max_length=30)
    grain_cal = models.FloatField()

    def __str__(self):
        return self.grain_name


class Meat(models.Model):
    meat_name = models.CharField(max_length=30)
    meat_cal = models.FloatField()

    def __str__(self):
        return self.meat_name
