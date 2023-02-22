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
        fields = ["author", "content", "rating", "published"]


class LocationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["city", "street", "building", "venue"]


class VenueDetailSerializer(serializers.ModelSerializer):
    location = LocationDetailSerializer(read_only=True)
    reviews = ReviewListSerializer(read_only=True, many=True)
    categories = serializers.SerializerMethodField()

    class Meta:
        model = Venue
        fields = [
            "name",
            "description",
            "cover_photo",
            "location",
            "reviews",
            "categories",
        ]

    def get_categories(self, obj):
        liquors = obj.get_liquors_by_category()
        return liquors
