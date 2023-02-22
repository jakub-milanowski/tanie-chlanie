from django.db import models


class Location(models.Model):
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    building = models.IntegerField()
    venue = models.IntegerField(null=True, blank=True)


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

    def get_liquors_by_category(self):
        liquors = self.liquors.all().select_related("category")
        liquors_by_category = {liquor.category.name: [] for liquor in liquors}
        for liquor in liquors:
            liquors_by_category[liquor.category.name].append(liquor.name)
        return [
            {"name": category_name, "liquors": liquors}
            for category_name, liquors in liquors_by_category.items()
        ]


class Review(models.Model):
    author = models.CharField(max_length=200)
    content = models.TextField(null=False, blank=False)
    rating = models.IntegerField()
    venue = models.ForeignKey(
        Venue, null=False, blank=False, on_delete=models.CASCADE, related_name="reviews"
    )
    published = models.DateTimeField(auto_now_add=True)
