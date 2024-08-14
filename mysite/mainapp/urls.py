from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView.as_view()),
    path('livros_populares/', views.VerLivrosPopulares.as_view()),
]