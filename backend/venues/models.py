from django.db import models


class Location(models.Model):
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    building = models.IntegerField()
    venue = models.IntegerField()


class Venue(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    modified = models.DateTimeField(auto_now=True)
    location = models.OneToOneField(
        Location,
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="located_at",
    )
    verified = models.BooleanField()
    cover_photo = models.URLField()


class Review(models.Model):
    author = models.CharField(max_length=200)
    content = models.TextField(null=False, blank=False)
    rating = models.IntegerField()
    venue = models.ForeignKey(
        Venue, null=False, blank=False, on_delete=models.CASCADE, related_name="reviews"
    )
