from django.db import models
from venues.models import Venue


class Category(models.Model):
    name = models.CharField(max_length=100)


class Liquor(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    volume = models.IntegerField()
    amount = models.IntegerField()
    thumbnail = models.URLField()
    category = models.ForeignKey(
        Category, null=True, blank=True, on_delete=models.SET_NULL
    )
    venue = models.ForeignKey(
        Venue, null=False, blank=False, on_delete=models.CASCADE, related_name="liquors"
    )
