# Generated by Django 3.2.3 on 2021-05-17 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calories', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vegetable',
            name='veg_cal',
            field=models.FloatField(),
        ),
    ]
