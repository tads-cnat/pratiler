from django.shortcuts import render
from django.views import View
from .models import Comentario, Usuario, Curtida
from .services import VerLivrosPopularesService

# Create your views here.
class VerFeedView(View):
    def get(self, request, *args, **kwargs):
        comentarios = Comentario.objects.all()
        comentarios_relevantes = []
        # if comentarios == []:
        #     mensagem = "Não há comentários relevantes no momento."
        #     return render(request, 'mainapp/feed_relevantes.html', {'mensagem':mensagem})
        # else:
        if len(comentarios) > 10:
            for i in range(0, 10):
                if comentarios[i].curtida_set.count() > 10: 
                    comentarios_relevantes.append(comentarios[i])
        else:
            for i in comentarios:
                if i.curtida_set.count() > 10:
                    comentarios_relevantes.append(i)
        return render(request, 'templates/feed_relevantes.html', {'comentarios_relevantes':comentarios_relevantes})

class VerLivrosPopulares(View):
    def get(self, request, *args, **kwargs):
        servico = VerLivrosPopularesService()
        livros_populares = servico.VerLivrosPopulares()
        if livros_populares == []: # se não tiver nada, mostrar mensagem de que não tem nenhum livro popular no momento
            mensagem = "Não há livros populares no momento."
            return render(request, 'templates/livros_populares.html', {'mensagem': mensagem})
        # renderização dos livros populares 
        return render(request, 'templates/livros_populares.html', {'livros_populares': livros_populares})


        
        


