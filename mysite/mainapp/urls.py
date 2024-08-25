from django.urls import path
from . import views

urlpatterns = [
    path('feed/', views.VerFeedView.as_view()),
    path('livros_populares/', views.VerLivrosPopulares.as_view()),
    path('livros/', views.GerenciarLivrosView.as_view(), name="index"),
    path('livros/<int:isbn>/', views.GerenciarLivrosView.get_editar, name="editar"),
    path('livros/<int:isbn>/editar/', views.GerenciarLivrosView.patch, name="editar_livro"),
    path('livros/<int:isbn>/deletar/', views.GerenciarLivrosView.delete, name="deletar"),
    path('livros/add/', views.GerenciarLivrosView.get_adicionar, name="adicionar"),
    path('livros/adicionar/', views.GerenciarLivrosView.as_view(), name="adicionar_livros"),
    path('', views.home, name='home'), # Chaves
    path('login/', views.paginaLogin, name="login"), # Chaves
    path('cadastro/', views.paginaCadastro, name="cadastro"), # Chaves
    path('logout/', views.logoutUser, name="logout"), # Chaves
    path('leitor/<int:leitor_id>', views.paginaLeitor, name='pagina_leitor'), # Chaves
    path('feed_seguindo/', views.VerFeedSeguindoView.as_view()),
]