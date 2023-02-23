from rest_framework import serializers
from .models import Liquor, Category


class LiquorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Liquor
        fields = ["name", "price", "thumbnail"]


class CategoryDetailSerializer(serializers.ModelSerializer):
    liquors = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["name", "liquors"]

    def get_liquors(self, category):
        liquors = self.context.get("venue").liquors.filter(category=category)
        print(liquors)
        serializer = LiquorListSerializer(liquors, context=self.context, many = True)
        return serializer.data
