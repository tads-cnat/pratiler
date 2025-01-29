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

class LivroSchema(Schema):
    id: int
    titulo: str
    sinopse: str
    capa: str
    n_paginas: int
    autor: AutorSchema

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
    pg_atual: int

class ResenhaSchema(ModelSchema):
     class Config:
         model = Resenha 
         model_fields = '__all__' 

class ComentarioSchemaIn(Schema):
    livro_id: int
    texto: str
    pagina_inicial: int
    pagina_final: int

class ComentarioSchemaOut(Schema):
    id: int
    texto: str
    data_hora: str
    pagina_inicial: int
    pagina_final: int
    leitor: LeitorSchema
    livro: LivroSchema
