from django.shortcuts import render
from rest_framework import generics
from .models import Venue
from .serializers import VenueListSerializer, VenueDetailSerializer


class VenuesListView(generics.ListAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueListSerializer


class VenuesDetailView(generics.RetrieveAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueDetailSerializer
