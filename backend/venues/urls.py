from django.urls import path
from . import views

urlpatterns = [
    path("", views.VenuesListView.as_view()),
    path("<int:pk>", views.VenuesDetailView.as_view()),
]
