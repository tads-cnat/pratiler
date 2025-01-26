from ninja import ModelSchema, Schema
from django.contrib.auth.models import User
from pydantic import HttpUrl
from .models import *

class SignInSchema(Schema):
    email: str
    password: str

class RegisterSchema(Schema):
    email: str
    password: str
    username: str

class AutorSchema(Schema):
    id: int
    nome: str

class LivroSchema(ModelSchema):
    autor: AutorSchema
    class Config:
        model = Livro
        model_fields = [ 'id','titulo', 'sinopse', 'capa', 'isbn', 'n_paginas', 'autor']

class UserSchema(ModelSchema):
    class Config:
        model = User
        model_fields = ['id', 'username', 'email', 'first_name', 'last_name']

class LeitorSchema(Schema):
    id: int
    username: str

class InteracaoSchema(Schema):
    id: int
    leitor: LeitorSchema
    livro: LivroSchema
    status: str

class ResenhaSchema(ModelSchema):
     class Config:
         model = Resenha 
         model_fields = '__all__' 

# class ComentarioSchema(ModelSchema):
#     class Config:
#         model = Comentario  
#         model_fields = ['id', 'livro', 'leitor', 'texto', 'data_hora', 'pagina_final']