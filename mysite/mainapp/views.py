from django.shortcuts import render, redirect
from django.views import View
from .services import VerLivrosPopularesService, ComentariosRecentesService
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout #Chaves
from django.contrib import messages #Chaves
from django.contrib.auth.decorators import login_required # Chaves


class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios = ComentariosRecentesService.ComentariosRecentesGeral()
        comentarios_relevantes = []
        if len(comentarios) > 10:
            for i in range(0, 10):
                if comentarios[i].curtida_set.count() > 2: 
                    comentarios_relevantes.append(comentarios[i])
        else:
            for i in comentarios:
                if i.curtida_set.count() > 2:
                    comentarios_relevantes.append(i)
        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes})
    
class VerFeedSeguindoView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(user=request.user)
        comentarios = ComentariosRecentesService.ComentariosRecentesSeguindo(usuario.id)
        return render(request, 'mainapp/feed_seguindo.html', {'comentarios_recentes': comentarios})

class VerLivrosPopulares(View):
    def get(self, request, *args, **kwargs):
        livros_populares = VerLivrosPopularesService.VerLivrosPopulares()
        # renderização dos livros populares 
        return render(request, 'mainapp/livros_populares.html', {'livros_populares': livros_populares})
    
class GerenciarLivrosView(View):
    def get(self, request, *args, **kwargs):
        '''
        Carrega o template 'index' do moderador
        '''
        livros = Livro.objects.all()
        return render(request, 'mainapp/mod_index.html', {"livros": livros})
    
    def get_editar(request, **kwargs):
        '''
        Carrega o template com o form de edição de um livro
        '''
        autores = Autor.objects.all()
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        return render(request, 'mainapp/mod_editar.html', {"livro": livro, "autores": autores})
    
    def get_adicionar(request):
        autores = Autor.objects.all()
        return render(request, 'mainapp/mod_adicionar.html', {"autores": autores})

    def post(self, request, *args, **kwargs):
        '''
        Adiciona um livro e renderiza a página principal do moderador com um feedback\n
        Caso haja exceções, renderiza a página de adicionar livro com uma mensagem de erro
        '''
        autor = Autor.objects.get(nome=request.POST['autor'])
        dados = {'titulo': request.POST['titulo'],
                 'descricao': request.POST['descricao'],
                 'capa': request.POST['capa'],
                 'isbn': request.POST['isbn'],
                 'n_paginas': request.POST['n_paginas'],
                 'autor': autor,
                }
        try:
            Livro.objects.create(**dados)
        except Exception as error:
            return render(request, 'mainapp/mod_adicionar.html', {'feedback': f'Dados mal inseridos, por favor insira os dados corretamente!\nErro identificado: {error}'})
        livro = Livro.objects.get(isbn=request.POST['isbn'])
        return redirect('index')
    
    def patch(request, **kwargs):
        '''
        Edita as informações de um livro e retorna para a página principal do moderador\n
        Caso haja exceções, renderiza a página de editar livro com uma mensagem de erro
        '''
        autor = Autor.objects.get(nome=request.POST['autor'])
        dados = {'titulo': request.POST['titulo'],
                 'descricao': request.POST['descricao'],
                 'capa': request.POST['capa'],
                 'isbn': request.POST['isbn'],
                 'n_paginas': request.POST['n_paginas'],
                 'autor': autor
                }
        try:
            livro = Livro.objects.get(isbn=kwargs['isbn'])
            for key in dados:
                print(key)
                livro[key] = dados[key]
            livro.save()
        except Exception as error:
            return render(request, 'mainapp/mod_editar.html', {'feedback': f'Dados mal inseridos, por favor insira os dados corretamente!\nErro identificado: {error}'})
        return redirect('index')
    
    def delete(request, **kwargs):
        '''
        Deleta um livro e retorna para a página principal do moderador
        '''
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        livro_1 = livro
        livro.delete()
        return redirect('index')
    
class CurtirComentario(View):



class SeguirLeitorView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        user_followed = Usuario.objects.get(id_username=kwargs['username'])
        user.seguidores_de.add(user_followed)
        user_followed.seguido_por.add(user)
        return redirect('feed')

def home(request): # Chaves
    return render(request, 'mainapp/home.html')

def paginaLogin(request): # Chaves
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=senha)
            login(request, user)
            return redirect('/feed') #mudar para redirecionar para o VerFeed
        except:
            messages.error(request, 'Usuario não existe')

    return render(request, 'mainapp/login.html')

def paginaCadastro(request): # Chaves
    if request.method == 'POST':
        email = request.POST['email']
        primeiro_nome = request.POST['primeiro_nome']
        username = request.POST['username']
        senha = request.POST['senha']

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Nome de usuário já está em uso.')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email já está cadastrado.')
        else:
            user = User.objects.create_user(
                username=username,
                email=email,
                first_name=primeiro_nome,
                password=senha
            )
            usuario = Usuario.objects.create(
                user = user,
                id_username = username
            )
            user.save()
            usuario.save()
            return redirect('/login')
    
    return render(request, 'mainapp/cadastro.html')
        
def logoutUser(request): # Chaves
    logout(request)
    return redirect('/')
