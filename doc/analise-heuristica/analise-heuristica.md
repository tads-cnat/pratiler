# Avaliação da Interface do Projeto PratiLer

Alunos:\
Débora Samara dos Santos Rodrigues\
Ester Oliveira do Nascimento Duarte Melo\
Felipe Alves de Vasconcelos\
João Roberto Chaves Camboim

**Objetivo:** Realizar a avaliação da interface gráfica do projeto de desenvolvimento de software PratiLer para verificar inconsistências do projeto de acordo com as heurísticas definidas pela Lista Eureca (FREIRE; MATOS; DUARTE; VIEIRA, 2024). Neste documento, estão descritos os problemas encontrados através das avaliações individuais que os alunos do projeto PratiLer realizaram.

## 1 - Defeito na pesquisa dos livros na barra de pesquisa
Problema ocorre na div de navegação do site. Quando acessamos o site pela primeira vez e tentamos pesquisar um livro, não aparecem sugestões de livros. As sugestões só aparecem quando a página é recarregada. 
![image6](https://github.com/user-attachments/assets/45a755bf-1c3c-4115-bf7d-df98312eb441)

**Diretriz ferida:** AF1 - Funcionalidade\
**Sugestão de melhoria:** Realizar ajustes no código Front para a pesquisa funcionar assim que o leitor acessar a página do site\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 2 - Não há como cancelar ação de Começar Leitura
Problema ocorre quando um livro é adicionado à estante através do botão “Começar Leitura” na página do livro. Depois de adicionar o livro à estante, não há como retirá-lo da estante. 
![image3](https://github.com/user-attachments/assets/70c265d8-a2e9-4692-a54a-4353044e89e6)
![image2](https://github.com/user-attachments/assets/bcca0380-c80e-447a-8d7c-63fb367f20e2)


**Diretriz ferida:** AF8 - Cancelamento de ações\
**Sugestão de melhoria:** Implementar uma função para retirar um livro de uma estante\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 3 - Sinopse do livro de difícil leitura
Problema ocorre em página que exibe detalhes do livro na parte de Sinopse.


**Diretriz ferida:** FM13 - Leiturabilidade\
**Sugestão de melhoria:** Mudar a estrutura do texto para que seja mais adequado para ler em dispositivos desktop\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 4 - A formatação dos textos de sinopse do livro são diferentes 
Problema ocorre em diferentes páginas que exibem detalhes do livro. Uma das páginas é exibida quando acessamos o livro através de pesquisa da barra de pesquisa, e a outra página é exibida quando clicamos no botão “Ver Leitura” da página “Minha Estante”.
Resultado do botão “Ver Leitura”
![image10](https://github.com/user-attachments/assets/bee783c5-b1f1-403b-bfef-45e990f95de2)
![image3](https://github.com/user-attachments/assets/4dd2e5c4-fa5c-4aed-8592-9c31b2c4afbf)


Resultado da pesquisa através da barra de pesquisa

**Diretriz ferida:** FM6 - Consistência interna\
**Sugestão de melhoria:** Mudar o estilo de alguma das páginas para que a interface das páginas fiquem parecidas\
**Gravidade:** Média\
**Esforço de alteração:** Leve

## 5 - Texto da sinopse com leitura dificultada
Problema ocorre quando buscamos por detalhes do livro através do botão “Ver Leitura” na página “Minha Estante”. O texto está com uma cor que não contrasta com o fundo, dificultando a leitura.
![image10](https://github.com/user-attachments/assets/95affd63-e5f3-4d61-a525-496a6eccbeea)

**Diretriz ferida:** FM6 - Leiturabilidade, FM11 - Contraste\
**Sugestão de melhoria:** Mudar o estilo do texto, alterando sua cor, peso e estrutura, para que fique mais fácil de ler\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 6 - Imagens não possuem texto alternativo
Problema ocorre nas imagens dos livros que estão na página “Minha Estante”, que não possuem textos alternativos para as capas dos livros.
![image13](https://github.com/user-attachments/assets/f3b55e65-2394-434d-970f-74eee6484429)

**Diretriz ferida:** AC1 - Texto alternativo\
**Sugestão de melhoria:** Adicionar um texto alternativo para as imagens das páginas\
**Gravidade:** Alta\
**Esforço de alteração:** Leve

## 7 - Imagem da estante vazia não possui contraste
Problema ocorre quando acessamos a página minha estante e ela está vazia. A imagem que indica que não há livros na estante tem um texto que não possui contraste com o fundo.
![sem-livros](https://github.com/user-attachments/assets/8dea48af-c1ac-4e50-973e-72f5d95e2357)

**Diretriz ferida:** FM11 - Contraste\
**Sugestão de melhoria:** Alterar as cores da imagem para que ela tenha mais contraste com o fundo\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 8 - Imagem de “Sem Livros Por Aqui” não possui contraste
Problema ocorre quando clicamos no botão “Adicionar Livro” na página “Minha Estante”. É exibida uma imagem que não tem contraste com o fundo.
![image14](https://github.com/user-attachments/assets/8844cb46-4399-4dcc-bfbf-c8a7e87bc04b)

**Diretriz ferida:** FM11 - Contraste\
**Sugestão de melhoria:** Alterar as cores da imagem para que ela tenha mais contraste com o fundo\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 9 - Os botões para acessar perfil e fazer logout não ficam visíveis quando a tela é ajustada
Problema ocorre quando ajustamos o tamanho da tela para ficar do tamanho da tela de um dispositivo móvel.
![image16](https://github.com/user-attachments/assets/ccb1789d-90f7-4fd1-9ff0-62b2bffac697)

**Diretriz ferida:** PD3 - Responsividade\
**Sugestão de melhoria:** Adicionar configurações para que a tela seja ajustada quando o tamanho for alterado\
**Gravidade:** Alta\
**Esforço de alteração:** Moderado

## 10 - Sistema não possui visualização de alto contraste
O sistema não possibilita a visualização da interface com tema de alto contraste, dificultando a visualização dos elementos para quem tem problemas de visão.
**Diretriz ferida:** AC4 - Contraste de cor\
**Sugestão de melhoria:** Criar um tema de cor para que os elementos fiquem em alto contraste\
**Gravidade:** Alta\
**Esforço de alteração:** Grande

## 11 - Sistema não possui funcionalidade para aumentar o tamanho dos elementos
O sistema não possui uma funcionalidade que possibilite ao usuário aumentar o tamanho dos elementos de texto, dificultando a visualização dos elementos de texto para quem tem problemas de visão.

**Diretriz ferida:** AC5 - Possibilidade de ampliação, AC8 - Possibilidade de formatar fontes\
**Sugestão de melhoria:** Criar uma funcionalidade que permita o usuário de aumentar o tamanho da fonte no próprio site\
**Gravidade:** Alta\
**Esforço de alteração:** Grande

## 12 - Sistema não possui um destaque de configurações para acessibilidade
O sistema não possui um menu destacado para que o usuário possa configurar o site para que ele se torne acessível.

**Diretriz ferida:** AC6 - Destaque nas configurações\
**Sugestão de melhoria:** Criar uma funcionalidade para que o site tenha um menu suspenso em que o usuário possa alterar as configurações do site ao seu favor\
**Gravidade:** Alta\
**Esforço de alteração:** Grande

## 13 - Sistema não permite que o usuário ajuste a saturação das imagens
O sistema não possui uma funcionalidade que permita ao usuário ajustar a saturação das imagens e em local algum. 
**Diretriz ferida:** AC10 - Formatação de saturação\
**Sugestão de melhoria:** Criar uma funcionalidade para que o usuário ajuste a saturação das imagens. Sugestão: em um pop-up de configurações de ajustes do site.\
**Gravidade:** Baixa\
**Esforço de alteração:** Grande

## 14 - Sistema não possui uma “guia de leitura”
O sistema não possui uma funcionalidade parecida com um guia de leitura para auxiliar o usuário na leitura de textos, utilizando barras de destaque que se ajustam conforme a leitura progride.
**Diretriz ferida:** AC13 - Configuração para leitura\
**Sugestão de melhoria:** Criar uma funcionalidade que permita os usuários ativarem uma guia de leitura para auxiliar as leituras dos textos\
**Gravidade:** Média\
**Esforço de alteração:** Grande

## 15 - Sistema não possui tradução para Libras
O sistema não possui integração com uma API para traduzir os textos do site para Libras.
**Diretriz ferida:** AC14 - Ativação de Libras\
**Sugestão de melhoria:** Integrar o sistema com uma API externa que permita a tradução dos textos do site para Libras.\
**Gravidade:** Média\
**Esforço de alteração:** Grande

## 16 - Sistema não retorna mensagem de erro ao adicionar um livro que já está na estante
O problema ocorre na página de detalhes de um livro. Quando tento adicionar um livro que já está na minha estante, não é exibida nenhuma mensagem de erro.
![image3](https://github.com/user-attachments/assets/c3e3a7b8-b7e8-454c-8241-fa1b8df38668)
![image2](https://github.com/user-attachments/assets/b63a8d41-1b82-4905-9298-7fb8b1891ce2)

**Diretriz ferida:** CO2 - Feedback adequado\
**Sugestão de melhoria:** Implementar uma funcionalidade no frontend para exibição de uma mensagem de erro\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 17 - Background de um botão está na cor errada
O problema ocorre quando o usuário clica no botão “Adicionar Livro” da página “Minha Estante” e é redirecionado para uma página com livros disponíveis no sistema, em que o botão para salvar um livro na estante Desejo Ler está com uma cor de fundo diferente da paleta de cores definida.
![image12](https://github.com/user-attachments/assets/8e0d369b-36a5-4fb9-8f39-e9a6baf3bc1a)

**Diretriz ferida:** FM12 - Paleta de cor, FM6 - Consistência interna\
**Sugestão de melhoria:** Alterar a cor do background do botão\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 18 - Botão para salvar livro na estante desejo ler não funciona
O problema ocorre quando o usuário clica no botão “Adicionar Livro” da página “Minha Estante” e é redirecionado para uma página com livros disponíveis no sistema. Quando o botão para salvar um livro na estante Desejo Ler é clicado, ele não é adicionado a estante.
![image12](https://github.com/user-attachments/assets/0a034aff-88de-422c-b9a1-8f5a2c6f7890)
![image1](https://github.com/user-attachments/assets/6f452dca-16d1-4c05-9d4d-1f041de28050)



**Diretriz ferida:** AF1 - Funcionalidade\
**Sugestão de melhoria:** Ajustar o código para que o livro seja adicionado a estante Desejo Ler\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 19 - Os resultados de uma pesquisa só aparecem depois de pressionar Enter duas vezes
Na barra de pesquisa, os resultados só aparecem após pressionar Enter duas vezes. 
**Diretriz ferida:** AF11 - Digitação otimizada\
**Sugestão de melhoria:** Implementar chamadas de requisições por intervalo de tempo entre a digitação\
**Gravidade:** Alta\
**Esforço de alteração:** Moderado

## 20 - Não há como o usuário avaliar o sistema
Não há um formulário no sistema em que o usuário possa enviar o seu feedback do sistema.
**Diretriz ferida:** CO9 - Avaliação do usuário\
**Sugestão de melhoria:** Solicitar avaliações do sistema ao realizar alguma ação importante no sistema\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 21 - Não há como ordenar leituras
O sistema não permite que o usuário ordene as suas leituras em suas estantes.
**Diretriz ferida:** FM4 - Ordenação da informação\
**Sugestão de melhoria:** Implementar um ordenador de leituras interativo para o usuário com diferentes critérios\
**Gravidade:** Baixa\
**Esforço de alteração:** Grande

## 22 - Botão de “Sair” não está consistente com os outros botões do sistema
O botão para “Sair” do sistema tem um comportamento estático em relação aos outros botões do sistema.
![image4](https://github.com/user-attachments/assets/14df8e21-183c-48de-bb12-5e419260947e)

**Diretriz ferida:** FM6 - Consistência interna\
**Sugestão de melhoria:** Criar um padrão de comportamento para todos os botões do sistema\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 23 - O sistema não tem animação de carregamento para transicionar entre as telas
Quando há troca entre as telas do sistema, não há nenhuma animação ou imagem para representar essa troca entre as telas.
**Diretriz ferida:** FM16 - Tela de carregamento\
**Sugestão de melhoria:** Criar uma tela de carregamento para as transições de tela\
**Gravidade:** Média\
**Esforço de alteração:** Leve

## 24 -  O sistema não tem opção da possibilidade de idioma
Não há recurso de mudança de idioma no sistema em local algum. 
**Diretriz ferida:**  AC16 - Possibilidade de mudança de idioma\
**Sugestão de melhoria:** Não há recurso de mudança de idioma no sistema em local algum. Seria interessante que houvesse um ícone de mudança de idioma no header. \
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 25 - O sistema não mapeia as rotas para o usuário
Não há orientação sobre o caminho percorrido na navegação na parte superior, abaixo do header.
![sem-breadcumb](https://github.com/user-attachments/assets/f3f690e1-029f-4327-9398-64771beaf436)

**Diretriz ferida:**  NA4 - Migalhas de pão\
**Sugestão de melhoria:** Implementar as migalhas de pão logo abaixo do header.\
**Gravidade:** Média\
**Esforço de alteração:** Leve

## 26 - A tela de detalhamento de livros não se reajusta com o tamanho da tela
A página não se adequa ao tamanho da tela de forma satisfatória ao reduzirmos o tamanho da janela, gerando um scroll horizontal. Além disso, não há uma adequação do texto e do header nessa situação. 
![image11](https://github.com/user-attachments/assets/c2d56615-be7c-40df-b711-867f70d79335)


**Diretriz ferida:**  PD3 – Responsividade\
**Sugestão de melhoria:** Reajuste do código fonte para que o navegador do header se transforme em um menu lateral reduzido e que o texto da página acompanhe o tamanho da tela.\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 27 - A página da estante não se reajusta com o tamanho da tela
A página de minha estante não se adequa ao tamanho da tela de forma satisfatória ao reduzirmos o tamanho da tela, gerando um scroll horizontal. Além disso, não há uma adequação dos itens da página nessa situação.
![image15](https://github.com/user-attachments/assets/cc459cb9-5435-4c52-80a3-6dedb816d10e)

**Diretriz ferida:**  PD3 – Responsividade\
**Sugestão de melhoria:** Reajuste para que o navegador do header se transforme em um menu lateral reduzido e que os cards se ajustem de forma que exista um padding equidistante ao redor de todo o conteúdo em todas as situações.\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 28 - Ícones nos botões não possuem uma consistência
Em alguns botões os ícones não estão no mesmo lado
 ![image5](https://github.com/user-attachments/assets/11146a17-d51a-4b51-9c74-0f5118b46c10)
![image8](https://github.com/user-attachments/assets/0a6c522f-3ca5-4f1f-8d9a-54a3132e9fde)


**Diretriz ferida:**  FM6 - Consistência interna\
**Sugestão de melhoria:** Reajuste para manter um padrão em todas as partes do sistemas, através de componentização\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 29 - O sistema não oferece personalização de tema
O sistema possui apenas um tema de cores e visual, não permitindo personalização como para um tema escuro.
**Diretriz ferida:**  PU2 – Personalização\
**Sugestão de melhoria:** Possibilitar opções de personalização, de acordo com as preferências do usuário\
**Gravidade:** Baixa\
**Esforço de alteração:** Moderada

## 30 - O sistema não oferece outras possibilidades de login
O sistema apenas possibilita o login se o usuário inserir o email e a senha cadastrados no sistema, não tendo a opção de login automático por conta do Google ou do Facebook, por exemplo.
**Diretriz ferida:**  PU4 - Redução do esforço cognitivo\
**Sugestão de melhoria:** Possibilitar mais opções de login, exemplo: Google, Facebook e etc\
**Gravidade:** Média\
**Esforço de alteração:** Alta





