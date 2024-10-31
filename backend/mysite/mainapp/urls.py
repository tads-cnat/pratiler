from django.urls import path
from . import views

urlpatterns = [
    path('postagem/', views.PostarComentarioView.as_view(), name="postar_comentario"),
    path('feed/', views.VerFeedView.as_view(), name="feed"),
    path('livros_populares/', views.VerLivrosPopularesView.as_view(), name="livros_populares"),
    path('mod/', views.GerenciarLivrosView.as_view(), name="index"),
    path('livros/', views.GerenciarLivrosView.get_adicionar, name="adicionar"),
    path('livros/adicionar/', views.GerenciarLivrosView.as_view(), name="adicionar_livro"),
    path('livros/<int:isbn>/', views.GerenciarLivrosView.get_editar, name="editar"),
    path('livros/<int:isbn>/editar/', views.GerenciarLivrosView.patch, name="editar_livro"),
    path('livros/<int:isbn>/deletar/', views.GerenciarLivrosView.delete, name="deletar"),
    path('', views.LandingPageView.as_view(), name='home'), # Chaves
    path('login/', views.paginaLogin, name="login"), # Chaves
    path('cadastro/', views.paginaCadastro, name="cadastro"), # Chaves
    path('logout/', views.logoutUser, name="logout"), # Chaves
    path('leitor/<str:username>/', views.PerfilView.as_view(), name='pagina_leitor'), # Chaves
    path('estante/<str:username>/', views.PerfilEstanteView.as_view(), name="estante_leitor"),
    path('resenhas/<str:username>/', views.PerfilResenhasView.as_view(), name="resenhas_leitor"),
    path('publicacoes_recentes/<str:username>/', views.PerfilPublicacoesRecentesView.as_view(), name="publicacoes_recentes_leitor"),
    path('livros_pesquisa/', views.livros_pesquisa, name="livros_pesquisa"), #Chaves
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view(), name="seguindo"),
    path('seguir/<str:username>/', views.SeguirLeitorView.as_view(), name="seguir_leitor"),
    path('curtir/<int:id>/', views.CurtirComentarioView.as_view(), name="CurtirComentario"),
    path('minha_estante/', views.VerMinhaEstanteView.as_view(), name="minha_estante"),
    path('pesquisa_estante/', views.AdicionarLivroEstanteView.as_view(), name="pesquisar_estante"),
    path('adiciona_estante/', views.AdicionarLivroEstanteView.as_view(), name="adicionar_estante"),
    path('escrever_resenha/', views.EscreverResenhaView.as_view(), name="escrever_resenha"),
    path('resenha/<int:pk>/', views.AbrirResenhaEspecifica.as_view(), name="abrir_resenha_especifica"),
]