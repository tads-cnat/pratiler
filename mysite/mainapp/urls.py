from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.paginaLogin, name="login"),
    path('cadastro/', views.paginaCadastro, name="cadastro"),
    path('logout/', views.logoutUser, name="logout"),
]