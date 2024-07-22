# Protótipos de Interface com o Usuário

## Mapa do Site

> Obs.: propõem-se a utilização de alguma ferramenta que possibilite a representação textual do diagrama. como o seguinte exemplo:

```mermaid
flowchart TD
1[Home] --- 2[Cadastro]
1 --- 3[Login]
1 --- 4[Sobre Nós]

3 --- 7[Minha Estante]
3 --- 8[Perfil]
3 --- 9[Livros Populares]
3 --- 10[Seguindo]

8 --- 11[Atualizações recentes]
8 --- 12[Minha estante]
8 --- 13[Lista de resenhas]
13 --- 15[Resenha]

16[Resultados da pesquisa] --- 17[Livros - ver mais]
16 --- 18[Usuários - ver mais]

19[Livro - detalhes]

```
```mermaid
flowchart TD
1[Login] --- 2[Lista de livros]
2 --- 4[Adicionar/editar livro]
```

## A. Tela 1: Home
![Página de home](wireframes-pratiler/Home.png)

## B. Tela 2: Login e cadastro
![Página de login](wireframes-pratiler/Login.png)
![Tela de cadastro de usuário](wireframes-pratiler/Cadastro.png)

# Telas para o perfil do usuário
## C. Tela 3: Meu perfil - atualizações recentes
![Atualizações recentes](wireframes-pratiler/atualizacoesrecentes.png)

## E. Tela 5: Meu perfil - listas de livros
![Tela de listas de livros](wireframes-pratiler/listalivros.png)

## F. Tela 6: Meu perfil - lista de resenhas
![Tela de lista de resenhas](wireframes-pratiler/listaresenhas.png)

## G. Tela 7: Meu perfil - resenha
![Tela com resenha](wireframes-pratiler/resenha.png)

# Telas para a página principal

## I. Tela 9: Minha estante
![Tela com a estante do usuário](wireframes-pratiler/Estante.png)

## J. Tela 10: Livros populares
![Tela com livros populares](wireframes-pratiler/Livrospopulares.png)

## K. Tela 11: Seguindo
![Tela com comentários de usuários que o usuário segue](wireframes-pratiler/Seguindo.png)

# Telas de pesquisa
## L. Tela 12: Pesquisando
![Pesquisando na barra de pesquisa](wireframes-pratiler/Pesquisando.png)

## M. Tela 13: Ver mais da pesquisa - Livros
![Tela com livros, como resultado do ver mais](wireframes-pratiler/PesquisaLivros.png)

## N. Tela 14: Ver mais da pesquisa - Usuários
![Tela com usuários, como resultado do ver mais](wireframes-pratiler/PesquisaUsuarios.png)

# Outras telas
## O. Tela 15: Informações de um livro
![Tela com informações de um livro específico](wireframes-pratiler/Informaçõeslivro.png)

## P. Tela 16: Sobre nós
![Tela sobre o site](wireframes-pratiler/Sobrenos.png)

# Pop-ups de gerenciamento de livros
## Q. Tela 17: Adicionar livro para ler pela Estante
![Pop-up de adicionar livro pela estante](wireframes-pratiler/popup-adicionarlivroestante.png)

## R. Tela 18: Adicionar livro para ler pelo Perfil
![Pop-up de adicionar livro pelo perfil](wireframes-pratiler/popup-adicionarleituraatual.png)

## S. Tela 19: Adicionar avaliação de livro
![Pop-up para adicionar avaliação de um livro](wireframes-pratiler/popup-adicionaravaliacao.png)

## T. Tela 20: Interface do moderador
![Interface do moderador](wireframes-pratiler/GerenciarLivros.png)
