from django.shortcuts import render
from django.views import View
from .models import Comentario, Usuario, Curtida, Livro

# Create your views here.
class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios = Comentario.objects.all()
        comentarios_relevantes = []
        if comentarios == []:
            mensagem = "Não há comentários relevantes no momento."
            return render(request, 'mainapp/feed_relevantes.html', {'mensagem':mensagem})
        else:
            if len(comentarios) > 10:
                for i in range(0, 10):
                    if comentarios[i].curtida_set.count() > 10: 
                        comentarios_relevantes.append(comentarios[i])
            else:
                for i in comentarios:
                    if i.curtida_set.count() > 10:
                        comentarios_relevantes.append(i)
        return render(request, 'mainapp/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes})
    
    #def post(self, request, *args, **kwargs):

class GerenciarLivrosView(View):
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
                 'autor': request.POST['n_paginas']
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