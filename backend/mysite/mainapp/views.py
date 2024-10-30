from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from django.urls import reverse
from .services import VerLivrosPopularesService, ComentariosRecentesService, ComentariosRelevantesService, LivrosDisponiveis
from .models import *
from django.shortcuts import get_object_or_404 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout #Chaves
from django.contrib import messages #Chaves
from django.contrib.auth.decorators import login_required # Chaves
from django.db.models import Q # Chaves
from django.utils import timezone
from unidecode import unidecode

import pdb

class PostarComentarioView(View):
    def post(self, request, *args, **kwargs):
        texto = request.POST.get('conteudo')
        livro_id = request.POST.get('livro')
        try:
            pg_final = int(request.POST.get('pagina-final'))
        except:
            messages.error(request, "Adicione a página em que parou.")
            return redirect(request.META["HTTP_REFERER"])
        leitor = Usuario.objects.get(user=request.user)
        data_hora = timezone.now

        comentarios_relevantes = ComentariosRelevantesService.ComentariosRelevantes()
        livros = leitor.interage_set.filter(status='LN')
        usuario = Usuario.objects.get(user=request.user)
        
        try:
            livro = Livro.objects.get(id=livro_id)
            if int(request.POST.get('pagina-inicial')) != 0:
                if pg_final < livro.comentario_set.filter(leitor=usuario).last().pagina_final:
                    messages.error(request, "Coloque uma página final maior que a anterior.")
            comentario = Comentario.objects.create(livro=livro, texto=texto, leitor=leitor, pagina_final=pg_final, data_hora=data_hora)
            comentario.save()
        except:
            messages.error(request, "Selecione um livro.")

        return redirect(request.META["HTTP_REFERER"])
    
class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios_relevantes = ComentariosRelevantesService.ComentariosRelevantes()
        
        usuario = Usuario.objects.get(user=request.user)
        livros = usuario.interage_set.filter(status='LN')

        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes, 'livros':livros})
    
class VerFeedSeguindoView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(user=request.user)
        comentarios = ComentariosRecentesService.ComentariosRecentesSeguindo(usuario.id)
        livros = usuario.interage_set.filter(status='LN')
        return render(request, 'mainapp/feed_seguindo.html', {'comentarios_recentes': comentarios, 'livros':livros})

class VerLivrosPopularesView(View):
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
        try:
            dados = {'titulo': request.POST['titulo'],
                     'descricao': request.POST['descricao'],
                     'capa': request.POST['capa'],
                     'isbn': request.POST['isbn'],
                     'n_paginas': request.POST['n_paginas'],
                     'autor': autor,
                    }
            Livro.objects.create(**dados)
            messages.error(request, "Livro adicionado com sucesso!")
        except:
            messages.error(request, f"Dados mal inseridos, por favor insira os dados corretamente!")
            return redirect('adicionar')
        livro = Livro.objects.get(isbn=request.POST['isbn'])
        return redirect('index')
    
    def patch(request, **kwargs):
        '''
        Edita as informações de um livro e retorna para a página principal do moderador\n
        Caso haja exceções, renderiza a página de editar livro com uma mensagem de erro
        '''
        autor = Autor.objects.get(nome=request.POST['autor'])
        try:
            dados = {'titulo': request.POST['titulo'],
                     'descricao': request.POST['descricao'],
                     'capa': request.POST['capa'],
                     'isbn': request.POST['isbn'],
                     'n_paginas': request.POST['n_paginas'],
                     'autor': autor
                    }
            livro = Livro.objects.get(isbn=kwargs['isbn'])
            livro.titulo = dados['titulo']
            livro.descricao = dados['descricao']
            livro.capa = dados['capa']
            livro.isbn = dados['isbn']
            livro.n_paginas = dados['n_paginas']
            livro.autor = dados['autor']
            livro.save()
            messages.success(request, f"Livro {livro.titulo} atualizado com sucesso!")
        except:
            messages.error(request, f"Dados mal inseridos, por favor insira os dados corretamente!")
            return redirect('editar')
        return redirect('index')
    
    def delete(request, **kwargs):
        '''
        Deleta um livro e retorna para a página principal do moderador
        '''
        livro = Livro.objects.get(isbn=kwargs['isbn'])
        livro.delete()
        messages.success(request, "livro deletado com sucesso!")
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

        return redirect(request.META["HTTP_REFERER"])

class PerfilView(View):
    def get(self, request, *args, **kwargs):
        leitor = get_object_or_404(Usuario, id_username=kwargs['username'])
        comentarios = leitor.comentario_set.all()
        context = {'leitor': leitor}
        return render(request, 'mainapp/pagina_leitor.html', context)

class PerfilEstanteView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(id_username=kwargs['username'])
        desejo_ler = usuario.interage_set.filter(status='QL')
        lendo = usuario.interage_set.filter(status='LN')
        lidos = usuario.interage_set.filter(status='LD')
        livros = LivrosDisponiveis.livros_disponiveis(usuario)
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos, "livros": livros, "leitor": usuario}
        return render(request, 'mainapp/leitor_minha_estante.html', contexto)

class VerMinhaEstanteView(View):
    def get(self, request, *args, **kwargs):
        usuario = Usuario.objects.get(user=request.user)
        desejo_ler = usuario.interage_set.filter(status='QL')
        lendo = usuario.interage_set.filter(status='LN')
        lidos = usuario.interage_set.filter(status='LD')
        livros = LivrosDisponiveis.livros_disponiveis(usuario)
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos, "livros": livros}
        return render(request, 'mainapp/minha_estante.html', contexto)

class AdicionarLivroEstanteView(View):
    def get(self, request, *args, **kwargs):
        titulo = request.GET['livro']
        livros = LivrosDisponiveis.livros_disponiveis(request.user.usuario).filter(titulo__contains=titulo)
        return render(request, 'mainapp/leitor_minha_estante.html', {"livros": livros})
    
    def post(self, request, *args, **kwargs):
        livro_id = request.POST.get('livro_id')
        livro = Livro.objects.get(id=livro_id)
        tipo_lista = request.POST.get('select')
        Interage.objects.create(leitor=request.user.usuario, livro=livro, status=tipo_lista)
        return redirect(request.META['HTTP_REFERER'])

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
                return redirect('feed') if not user.usuario.moderador else redirect('index') #mudar para redirecionar para o VerFeed
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
    return redirect('login')

def livros_pesquisa(request):

    if request.GET.get('q') != None:
        qa = unidecode(request.GET.get('q'))
        livros = Livro.objects.all()
        livros_lista = [livro for livro in livros]
        livros = [livro for livro in livros_lista if qa.lower() in unidecode(livro.titulo.lower())]
    context = {'livros': livros}

    return render(request, 'mainapp/livros.html', context)

class VerMinhaEstantePerfil(View):
    def get(self, request, *args, **kwargs):
        desejo_ler = request.user.usuario.interage_set.filter(status='QL')
        lendo = request.user.usuario.interage_set.filter(status='LN')
        lidos = request.user.usuario.interage_set.filter(status='LD')
        contexto = {"desejo_ler": desejo_ler, "lendo": lendo, "lidos": lidos}
        return render(request, 'mainapp/meu_perfil_minha_estante.html', contexto)

class MeuPerfilView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'mainapp/meu_perfil_atualizacoes_recentes.html')

class AbrirResenhaEspecifica(View):
    def get(self, request, *args, **kwargs):
        resenha_id = kwargs['pk']
        try:
            resenha = Resenha.objects.get(id=resenha_id)
            return render(request, 'mainapp/resenha.html', {'resenha':resenha, 'leitor': request.user.usuario})
        except:
            mensagem = "Essa resenha não existe."
            return render(request, 'mainapp/resenha.html', {'mensagem':mensagem})
    
class PerfilResenhasView(View): 
    def get(self, request, *args, **kwargs):
        leitor = Usuario.objects.get(id_username=kwargs['username'])
        return render(request, 'mainapp/leitor_resenhas.html', {"leitor": leitor})
    
class PerfilPublicacoesRecentesView(View):
    def get(self, request, *args, **kwargs):
        leitor = Usuario.objects.get(id_username=kwargs['username'])
        livros = leitor.interage_set.filter(status='LN')
        return render(request, 'mainapp/leitor_pub_recentes.html', {"leitor": leitor, "livros":livros})


class EscreverResenhaView(View):
    def get(self, request, *args, **kwargs):
        livros = request.user.usuario.interage_set.filter(status='LD')
        livros_lidos = [interacao.livro for interacao in livros]
        context = {'livros': livros_lidos, 'leitor': request.user.usuario}
        return render(request, 'mainapp/escrever_resenha.html', context)

    def post(self, request, *args, **kwargs):
        try:
            livro_titulo = request.POST.get('livro')
            livro = Livro.objects.get(titulo=livro_titulo)
            titulo_resenha = request.POST.get('titulo_resenha')
            texto_resenha = request.POST.get('texto_resenha')
        except:
            messages.error(request, "Preencha todos os dados acima para escrever a resenha.")
            return redirect('escrever_resenha')
        else:
            user = request.user
            leitor = Usuario.objects.get(user=user)
            try:
                Resenha.objects.create(
                    livro = livro,
                    leitor = leitor,
                    titulo = titulo_resenha,
                    texto =  texto_resenha,
                )
            except:
                messages.error(request, "Já existe uma resenha sua com este livro.")
                return redirect('escrever_resenha')
        return redirect(reverse('resenhas_leitor', args=[request.user.usuario.id_username]))
    # kwargs={'username': request.user.usuario.id_username}