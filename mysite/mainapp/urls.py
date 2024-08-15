from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView.as_view()),
    path('livros_populares/', views.VerLivrosPopulares.as_view()),
    path('livros/', views.GerenciarLivrosView.as_view(), name="index"),
    path('livros/<int:isbn>', views.GerenciarLivrosView.get_editar, name="editar"),
    path('livros/<int:isbn>/editar', views.GerenciarLivrosView.patch, name="editar_livros"),
    path('livros/<int:isbn>/deletar', views.GerenciarLivrosView.delete, name="deletar"),
    path('livros/adicionar/', views.GerenciarLivrosView.post, name="adicionar_livros"),
    path('', views.home, name='home'),
    path('login/', views.paginaLogin, name="login"),
    path('cadastro/', views.paginaCadastro, name="cadastro"),
    path('logout/', views.logoutUser, name="logout"),
]