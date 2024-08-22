from django.urls import path
from . import views

urlpatterns = [
    #path('<slug:username>/seguir/', views.SeguirLeitorView.as_view(), name="seguir_leitor"),
    path('feed/', views.VerFeedView.as_view(), name="feed"),
    path('livros_populares/', views.VerLivrosPopulares.as_view()),
    path('livros/', views.GerenciarLivrosView.as_view(), name="index"),
    path('livros/add/', views.GerenciarLivrosView.get_adicionar, name="adicionar"),
    path('livros/adicionar/', views.GerenciarLivrosView.as_view(), name="adicionar_livros"),
    path('livros/<int:isbn>/', views.GerenciarLivrosView.get_editar, name="editar"),
    path('livros/<int:isbn>/editar/', views.GerenciarLivrosView.patch, name="editar_livro"),
    path('livros/<int:isbn>/deletar/', views.GerenciarLivrosView.delete, name="deletar"),
    path('', views.home, name='home'),
    path('login/', views.paginaLogin, name="login"),
    path('cadastro/', views.paginaCadastro, name="cadastro"),
    path('logout/', views.logoutUser, name="logout"),
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view()),
    path('<str:username>/seguir/', views.SeguirLeitorView.as_view(), name="seguir_leitor")
]