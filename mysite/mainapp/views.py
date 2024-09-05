from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from .services import VerLivrosPopularesService, ComentariosRecentesService, ComentariosRelevantesService
from .models import *
from django.shortcuts import get_object_or_404 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout #Chaves
from django.contrib import messages #Chaves
from django.contrib.auth.decorators import login_required # Chaves
from django.db.models import Q # Chaves
from django.utils import timezone

class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios_relevantes = ComentariosRelevantesService.ComentariosRelevantes()
        
        usuario = Usuario.objects.get(user=request.user)
        livros = usuario.interage_set.filter(status='LN')

        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes, 'livros':livros})
    def post(self, request, *args, **kwargs):
        texto = request.POST.get('conteudo')
        livro_id = request.POST.get('livro')
        pg_final = int(request.POST.get('pagina-final'))
        leitor = Usuario.objects.get(user=request.user)
        data_hora = timezone.now

        comentarios_relevantes = ComentariosRelevantesService.ComentariosRelevantes()
        livros = leitor.interage_set.filter(status='LN')
        usuario = Usuario.objects.get(user=request.user)
        
        try:
            livro = Livro.objects.get(id=livro_id)
            if pg_final < livro.comentario_set.filter(leitor=usuario).last().pagina_final:
                messages.error(request, "Coloque uma página final maior que a anterior.")
            comentario = Comentario.objects.create(livro=livro, texto=texto, leitor=leitor, pagina_final=pg_final, data_hora=data_hora)
            comentario.save()
        except:
            messages.error(request, "Selecione um livro.")

        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes, 'livros':livros})
    
class VerFeedSeguindoView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(user=request.user)
        comentarios = ComentariosRecentesService.ComentariosRecentesSeguindo(usuario.id)
        livros = usuario.interage_set.filter(status='LN')
        return render(request, 'mainapp/feed_seguindo.html', {'comentarios_recentes': comentarios, 'livros':livros})
    def post(self, request, *args, **kwargs):
        return

class VerLivrosPopularesView(View):
    def get(self, request, *args, **kwargs):
        livros_populares = VerLivrosPopularesService.VerLivrosPopulares()
        # renderização dos livros populares 
        return render(request, 'mainapp/livros_populares.html', {'livros_populares': livros_populares})

class VerMinhaEstanteView(View):
    def get(self, request, *args, **kwargs):
        desejo_ler = request.user.usuario.interage_set.filter(status='QL')
        lendo = request.user.usuario.interage_set.filter(status='LN')
        lidos = request.user.usuario.interage_set.filter(status='LD')
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos}
        return render(request, 'mainapp/minha_estante.html', contexto)

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
        '''
        Carrega o template com o form de adição de um livro
        '''
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
        except:
            messages.error(request, f"Dados mal inseridos, por favor insira os dados corretamente!")
            return redirect(request.META["HTTP_REFERER"])
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
            livro.titulo = dados['titulo']
            livro.descricao = dados['descricao']
            livro.capa = dados['capa']
            livro.isbn = dados['isbn']
            livro.n_paginas = dados['n_paginas']
            livro.autor = dados['autor']
            livro.save()
        except:
            messages.error(request, f"Dados mal inseridos, por favor insira os dados corretamente!")
            return redirect('editar')
        return redirect('index')
    
    def delete(request, **kwargs):
        '''
        Deleta um livro e retorna para a página principal do moderador
        '''
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        livro_1 = livro
        livro.delete()
        return redirect('index')
    
class CurtirComentarioView(View):
    def post(self, request,  *args, **kwargs): # envio de dados para o sistema
        comentario_id = kwargs.get('id')
        comentario_procurado = get_object_or_404(Comentario, id=comentario_id) # procura o comentario pelo id
        usuario = Usuario.objects.get(user=request.user)
        curtida, created = Curtida.objects.get_or_create(comentario=comentario_procurado, usuario=usuario)
        if not created: 
            curtida.delete()  # se a curtida existe, vai deletar.

        return redirect(request.META.get('HTTP_REFERER'))

class SeguirLeitorView(View):
    def get(self, request, *args, **kwargs):
        '''
        Segue o leitor requisitado pelo usuário\n
        Caso o usuário já esteja seguindo, deixará de seguir\n
        Após o processamento, renderiza a página na qual a View foi chamada
        '''
        user = Usuario.objects.get(user=request.user)
        user_followed = Usuario.objects.get(id_username=kwargs['username'])

        if user_followed in user.seguidores_de.all():
            user.seguidores_de.remove(user_followed)
            user_followed.seguidos_por.remove(user)
        else:   
            user.seguidores_de.add(user_followed)
            user_followed.seguidos_por.add(user)

        return redirect(request.META["next"])

class PerfilView(View):
    def get(self, request, *args, **kwargs):
        leitor = get_object_or_404(Usuario, id_username=kwargs['username'])
        context = {'leitor': leitor}
        return render(request, 'mainapp/pagina_leitor.html', context)

class PerfilEstanteView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(id_username=kwargs['username'])
        desejo_ler = usuario.interage_set.filter(status='QL')
        lendo = usuario.interage_set.filter(status='LN')
        lidos = usuario.interage_set.filter(status='LD')
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos, "leitor": usuario}
        return render(request, 'mainapp/leitor_minha_estante.html', contexto)

class VerMinhaEstanteView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(user=request.user)
        desejo_ler = usuario.interage_set.filter(status='QL')
        lendo = usuario.interage_set.filter(status='LN')
        lidos = usuario.interage_set.filter(status='LD')
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos}
        return render(request, 'mainapp/minha_estante.html', contexto)
    
class LandingPageView(View):
    def get(self, request, *args, **kwargs):
        return redirect('feed') if request.user.is_authenticated else render(request, 'mainapp/home.html')

def paginaLogin(request): # Chaves
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=senha)
            if user:
                login(request, user)
                return redirect('/feed') #mudar para redirecionar para o VerFeed
            else:
                messages.error(request, 'Dados inválidos, por favor corrija os dados inseridos e tente novamente')
        except:
            messages.error(request, 'Usuario não existe, gostaria de se cadastrar?')

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

def paginaLeitor(request, username): # Chaves
    leitor = get_object_or_404(Usuario, id_username=username)
    context = {'leitor': leitor}
    return render(request, 'mainapp/pagina_leitor.html', context)

def livros_pesquisa(request):
    q = ''

    if request.GET.get('q') != None:
        q = request.GET.get('q')
    
    livros = Livro.objects.filter(
        Q(titulo__icontains=q)
    )

    context = {'livros': livros}

    return render(request, 'mainapp/livros.html', context)
