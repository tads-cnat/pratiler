from django.urls import path
from . import views

urlpatterns = [
    #path('<slug:username>/seguir/', views.SeguirLeitorView.as_view(), name="seguir_leitor"),
    path('feed/', views.VerFeedView.as_view(), name="feed"),
    path('livros_populares/', views.VerLivrosPopulares.as_view(), name="livros_populares"),
    path('livros/', views.GerenciarLivrosView.as_view(), name="index"),
    path('livros/add/', views.GerenciarLivrosView.get_adicionar, name="adicionar"),
    path('livros/adicionar/', views.GerenciarLivrosView.as_view(), name="adicionar_livros"),
    path('livros/<int:isbn>/', views.GerenciarLivrosView.get_editar, name="editar"),
    path('livros/<int:isbn>/editar/', views.GerenciarLivrosView.patch, name="editar_livro"),
    path('livros/<int:isbn>/deletar/', views.GerenciarLivrosView.delete, name="deletar"),
    path('livros/add/', views.GerenciarLivrosView.get_adicionar, name="adicionar"),
    path('livros/adicionar/', views.GerenciarLivrosView.as_view(), name="adicionar_livros"),
    path('', views.home, name='home'), # Chaves
    path('login/', views.paginaLogin, name="login"), # Chaves
    path('cadastro/', views.paginaCadastro, name="cadastro"), # Chaves
    path('logout/', views.logoutUser, name="logout"), # Chaves
    path('leitor/<str:username>', views.paginaLeitor, name='pagina_leitor'), # Chaves
    path('livros_pesquisa/', views.livros_pesquisa, name="livros_pesquisa"), #Chaves
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view(), name="seguindo"),
    path('<str:username>/seguir/', views.SeguirLeitorView.as_view(), name="seguir_leitor")
]