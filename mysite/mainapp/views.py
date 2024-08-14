from django.shortcuts import render
from django.views import View
from .models import Comentario
from .services import VerLivrosPopularesService

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


        
        


