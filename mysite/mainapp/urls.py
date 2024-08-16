from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView.as_view()),
    path('livros_populares/', views.VerLivrosPopulares.as_view()),
    path('', views.home, name='home'),
    path('login/', views.paginaLogin, name="login"),
    path('cadastro/', views.paginaCadastro, name="cadastro"),
    path('logout/', views.logoutUser, name="logout"),
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view()),
]