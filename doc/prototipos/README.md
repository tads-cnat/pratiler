# Protótipos de Interface com o Usuário

## Mapa do Site

> Obs.: propõem-se a utilização de alguma ferramenta que possibilite a representação textual do diagrama. como o seguinte exemplo:

```mermaid
flowchart TD
1[Home] --- 2[Cadastro]
1 --- 3[Login]
2 --- 8[Minha Estante]
3 --- 8
8 --- 4[Perfil - estante]
8 --- 9[Livros Populares]
8 --- 10[Publicações Populares]
9 --- 4
10 --- 4

4 --- 5[Perfil - resenhas]
4 --- 6[Perfil - avaliações]
4 --- 7[Perfil - publicações]

4 --- 11[Leitura - resenha]
4 --- 12[Leitura - avaliação]
4 --- 13[Leitura - publicações]
8 --- 11
8 --- 12
8 --- 13
```
# Telas do visitante
## A. Tela 1: Home
![Página de home](https://github.com/user-attachments/assets/ca54a171-1f60-41c9-9e71-2bd9d8ee7226)

## B. Tela 2: Login
![Página de login](https://github.com/user-attachments/assets/0905ac97-f63a-4fe3-881e-bf1811e288a0)

## C. Tela 3: Cadastro
![Página de cadastro](https://github.com/user-attachments/assets/833d0dad-98ad-420f-99f5-4a35cb54d3a5)


# Telas do perfil do usuário
## D. Tela 4: Meu perfil - estante
![Página da estante do perfil](https://github.com/user-attachments/assets/08d594dd-0ded-4091-9682-8c002eeeee10)

## E. Tela 5: Meu perfil - resenhas
![Página de resenhas do perfil](https://github.com/user-attachments/assets/c1762390-1124-4c8c-9da7-66036e3d2905)

## F. Tela 6: Meu perfil - avaliações
![Página de avaliações do perfil](https://github.com/user-attachments/assets/f3c317f7-6709-4b0c-a6a1-36e50c7088cf)

## G. Tela 7: Meu perfil - publicações
![Página de publicações do perfil](https://github.com/user-attachments/assets/34c84430-abed-478e-9983-79edea1b1df8)


# Telas da página principal
## H. Tela 8: Minha estante
![Página da estante na principal](https://github.com/user-attachments/assets/39b2ccef-38c4-4e9b-ad1c-8f091a62ae4f)

## I. Tela 9: Livros populares
![Página de livros populares](https://github.com/user-attachments/assets/681a7ea4-d5b6-4b4b-a64e-12ba54db2fe3)

## J. Tela 10: Publicações populares
![Página de publicações populares](https://github.com/user-attachments/assets/4e7ac722-262c-4288-a652-98c547295bbb)

# Telas de detalhamento da leitura
## K. Tela 11: Leitura - resenha
![Página de resenha no detalhamento da leitura](https://github.com/user-attachments/assets/3eb84852-1eee-4628-8749-f769683b5d5c)

## L. Tela 12: Leitura - avaliação
![Página de avaliação no detalhamento da leitura](https://github.com/user-attachments/assets/c9b64f69-f180-4668-add5-d7d92c5c879e)

## M. Tela 13: Leitura - publicações
![Página de publicações no detalhamento da leitura](https://github.com/user-attachments/assets/8f6b1661-6d17-49ee-b174-4f36cf744889)
