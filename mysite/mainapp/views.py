from django.shortcuts import render
from django.views import View
from .models import Comentario, Usuario, Curtida

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

