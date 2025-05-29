from django.test import TestCase
from mainapp.models import *
# Create your tests here.
# Passo 1: Selecionar as classes para as quais
# iremos construir testes de unidade.
# Passo 2: Construir uma classe de testes no
# arquivo tests.py
# Passo 3: Herdar da classe TestCase
# Passo 4: Criar os métodos de teste.
# ◦ Devem iniciar com a palavra “test”.
# ◦ Devem testar condições de sucesso e falha.

class GerenciarEstanteTestCase(TestCase):
    def setUp(self):
        self.leitor = Leitor.objects.create_user(nome="Ramon Vieira", username="Romeu", email="romeu@email.com", password="coxinha123")
        
        self.livro = Livro.objects.create(
            titulo="O Senhor dos Anéis: A Sociedade do Anel",
            sinopse="Uma jornada épica pela Terra Média.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-148410-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="J.R.R. Tolkien")
        )

        self.interacao = Interacao.objects.create(
            leitor=self.leitor,
            livro=self.livro,
            status='LN',  # Lendo
            pg_atual=0 
        )

    # Testes 
    # Adicionar livro que já existe na estante
    # Listar livros que o leitor está lendo, quero ler e lidos 


       
