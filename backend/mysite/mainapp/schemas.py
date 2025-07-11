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
    nome: str

class AutorSchema(Schema):
    id: int
    nome: str

class LivroSchema(Schema):
    id: int
    titulo: str
    sinopse: str
    capa: str
    isbn: str
    n_paginas: int
    autor: AutorSchema

class LivroSchemaIn(Schema):
    titulo: str
    sinopse: str
    capa: str
    isbn: str
    n_paginas: int
    autor: str
    class Config:
        model = Livro
        model_fields = ['titulo', 'sinopse', 'capa', 'isbn', 'n_paginas', 'autor']

class UserSchema(ModelSchema):
    foto_perfil: str
    biografia: str
    nome: str
    class Config:
        model = User
        model_fields = ['id', 'username', 'email']


class LeitorSchema(Schema):
    id: int
    username: str

class PerfilSchema(Schema):
    leitor: UserSchema
    seguidor: bool
    seguidores: int
    seguindo: int

class InteracaoSchema(Schema):
    id: int
    leitor: LeitorSchema
    livro: LivroSchema
    status: str
    pg_atual: int

class InteracaoFilter(Schema):
    username: str = None
    status: str = None

    def get_status(self):
        return self.status.split(',') if self.status else ['QL', 'LN', 'LD']

class InteracaoSchemaIn(Schema):
    livro_id: int
    status: str
    pg_atual: int = 0

class InteracaoSchemaUpdate(Schema):
    status: str = None
    pg_atual: int = 0

class ResenhaSchemaIn(Schema):
    livro_id: int
    titulo: str
    texto: str

class ResenhaSchema(Schema):
    livro: LivroSchema
    leitor: LeitorSchema
    titulo: str
    texto: str

class PostagemSchemaIn(Schema):
    livro_id: int
    texto: str
    pagina_inicial: int
    pagina_final: int

class PostagemSchemaOut(Schema):
    id: int
    texto: str
    data_hora: str
    pagina_inicial: int
    pagina_final: int
    leitor: LeitorSchema
    livro: LivroSchema

class PostagemListSchemaOut(Schema):
    id: int
    texto: str
    data_hora: str
    pagina_inicial: int
    pagina_final: int
    curtidas: int
    curtido: bool
    leitor: LeitorSchema
    livro: LivroSchema

class CurtidaSchema(Schema):
    postagem_id: int

class AvaliacaoSchemaIn(Schema):
    livro_id: int
    nota: int
    texto: str

class AvaliacaoSchemaOut(Schema):
    id: int
    nota: int
    texto: str
    data_hora: str
    livro: LivroSchema
    leitor: LeitorSchema

class ErrorSchema(Schema):
    message: str