from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView.as_view(), name="feed"),
    path('livros_populares/', views.VerLivrosPopularesView.as_view(), name="livros_populares"),
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
    path('leitor/<str:username>', views.PerfilView.as_view(), name='pagina_leitor'), # Chaves
    path('estante/<str:username>/', views.PerfilEstanteView.as_view(), name="estante_leitor"),
    path('livros_pesquisa/', views.livros_pesquisa, name="livros_pesquisa"), #Chaves
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view(), name="seguindo"),
    path('<str:username>/seguir/', views.SeguirLeitorView.as_view(), name="seguir_leitor"),
    path('feed_seguindo/<int:id>/', views.CurtirComentarioView.as_view(), name="CurtirComentario"),
    path('minha_estante/', views.VerMinhaEstanteView.as_view(), name="minha_estante")
]