from rest_framework import serializers

from .models import Venue, Location, Review

from liquors.serializers import LiquorListSerializer


class VenueListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ["name", "cover_photo", "id"]


class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["author", "content", "rating"]


class LocationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["street", "building", "venue"]


class VenueDetailSerializer(serializers.ModelSerializer):
    location = LocationDetailSerializer(read_only=True)
    reviews = ReviewListSerializer(read_only=True, many=True)
    liquors = LiquorListSerializer(read_only=True, many=True)

    class Meta:
        model = Venue
        fields = [
            "name",
            "description",
            "cover_photo",
            "location",
            "reviews",
            "liquors",
        ]
