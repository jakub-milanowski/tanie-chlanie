from rest_framework import serializers
from .models import Liquor, Category


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class LiquorListSerializer(serializers.ModelSerializer):
    category = CategoryDetailSerializer(read_only=True)

    class Meta:
        model = Liquor
        fields = ["name", "price", "category"]
