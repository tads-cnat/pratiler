from django.shortcuts import render, redirect
from django.views import View
from .services import VerLivrosPopularesService
from .models import Comentario, Usuario, Livro
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout #Chaves
from django.contrib import messages #Chaves
from django.contrib.auth.decorators import login_required # Chaves

# Create your views here.
class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios = Comentario.objects.all()
        comentarios_relevantes = []
        if len(comentarios) > 10:
            for i in range(0, 10):
                if comentarios[i].curtida_set.count() > 10: 
                    comentarios_relevantes.append(comentarios[i])
        else:
            for i in comentarios:
                if i.curtida_set.count() > 10:
                    comentarios_relevantes.append(i)
        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes})

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
    
    def get_editar(self, request, *args, **kwargs):
        '''
        Carrega o template com o form de edição de um livro
        '''
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        return render(request, 'mainapp/mod_editar.html', {"livro": livro})
    
    def post(self, request, *args, **kwargs):
        '''
        Adiciona um livro e renderiza a página principal do moderador com um feedback
        Caso haja exceções, renderiza a página de adicionar livro com uma mensagem de erro
        '''
        dados = {'titulo': request.POST['titulo'],
                 'descricao': request.POST['descricao'],
                 'capa': request.POST['capa'],
                 'isbn': request.POST['isbn'],
                 'n_paginas': request.POST['n_paginas'],
                 'autor': request.POST['autor']
                }
        try:
            Livro.objects.create(**dados)
        except Exception as error:
            return render(request, 'mainapp/mod_adicionar.html', {'error': f'Dados mal inseridos, por favor insira os dados corretamente!\nErro identificado: {error}'})
        livro = Livro.objects.get(isbn=request.POST['isbn'])
        return render(request, 'mainapp/mod_index.html', {'feedback': f'{livro.titulo} adicionado com sucesso!'})
    
    def patch(self, request, *args, **kwargs):
        '''
        Edita as informações de um livro e retorna para a página principal do moderador
        Caso haja exceções, renderiza a página de editar livro com uma mensagem de erro
        '''
        dados = {'titulo': request.POST['titulo'],
                 'descricao': request.POST['descricao'],
                 'capa': request.POST['capa'],
                 'isbn': request.POST['isbn'],
                 'n_paginas': request.POST['n_paginas'],
                 'autor': request.POST['n_paginas']
                }
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        try:
            livro.update(**dados)
            livro.save()
        except Exception as error:
            return render(request, 'mainapp/mod_editar.html', {'error': f'Dados mal inseridos, por favor insira os dados corretamente!\nErro identificado: {error}'})
        return render(request, 'mainapp/mod_index.html', {'feedback': f'{livro.titulo} editado com sucesso!'})
    
    def delete(self, request, *args, **kwargs):
        '''
        Deleta um livro e retorna para a página principal do moderador
        '''
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        livro.delete()
        return render(request, 'mainapp/mod_index.html', {'feedback': f'{livro.titulo} deletado com sucesso!'})
    
def home(request): # Chaves
    return render(request, 'mainapp/home.html')

def paginaLogin(request): # Chaves
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        try:
            user = User.objects.get(email=email)
        except:
            messages.error(request, 'Usuario não existe')
        # Tratar quando ele não conseguir pegar esse user

        user = authenticate(request, username=user.username, password=senha)

        if user is not None:
            login(request, user)
            return redirect('/')

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
            user.save()
            return redirect('/login')
    
    return render(request, 'mainapp/cadastro.html')
        
def logoutUser(request): # Chaves
    logout(request)
    return redirect('/')