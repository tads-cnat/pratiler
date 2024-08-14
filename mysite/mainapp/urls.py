from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView),
    path('livros_populares/', views.VerLivrosPopulares),
]