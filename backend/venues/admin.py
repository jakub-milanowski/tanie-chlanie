from django.contrib import admin

from .models import Venue, Location, Review

admin.site.register(Venue)
admin.site.register(Review)
admin.site.register(Location)
