# Avaliação da Interface do Projeto PratiLer

Alunos:\
Débora Samara dos Santos Rodrigues\
Ester Oliveira do Nascimento Duarte Melo\
Felipe Alves de Vasconcelos\
João Roberto Chaves Camboim

**Objetivo:** Realizar a avaliação da interface gráfica do projeto de desenvolvimento de software PratiLer para verificar inconsistências do projeto de acordo com as heurísticas definidas pela Lista Eureca (FREIRE; MATOS; DUARTE; VIEIRA, 2024). Neste documento, estão descritos os problemas encontrados através das avaliações individuais que os alunos do projeto PratiLer realizaram.

## 1 - Defeito na pesquisa dos livros na barra de pesquisa
Problema ocorre na div de navegação do site. Quando acessamos o site pela primeira vez e tentamos pesquisar um livro, não aparecem sugestões de livros. As sugestões só aparecem quando a página é recarregada. 

**Diretriz ferida:** AF1 - Funcionalidade\
**Sugestão de melhoria:** Realizar ajustes no código Front para a pesquisa funcionar assim que o leitor acessar a página do site\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 2 - Não há como cancelar ação de Começar Leitura
Problema ocorre quando um livro é adicionado à estante através do botão “Começar Leitura” na página do livro. Depois de adicionar o livro à estante, não há como retirá-lo da estante. 


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


Resultado da pesquisa através da barra de pesquisa

**Diretriz ferida:** FM6 - Consistência interna\
**Sugestão de melhoria:** Mudar o estilo de alguma das páginas para que a interface das páginas fiquem parecidas\
**Gravidade:** Média\
**Esforço de alteração:** Leve

## 5 - Texto da sinopse com leitura dificultada
Problema ocorre quando buscamos por detalhes do livro através do botão “Ver Leitura” na página “Minha Estante”. O texto está com uma cor que não contrasta com o fundo, dificultando a leitura.

**Diretriz ferida:** FM6 - Leiturabilidade, FM11 - Contraste\
**Sugestão de melhoria:** Mudar o estilo do texto, alterando sua cor, peso e estrutura, para que fique mais fácil de ler\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 6 - Imagens não possuem texto alternativo
Problema ocorre nas imagens dos livros que estão na página “Minha Estante”, que não possuem textos alternativos para as capas dos livros.

**Diretriz ferida:** AC1 - Texto alternativo\
**Sugestão de melhoria:** Adicionar um texto alternativo para as imagens das páginas\
**Gravidade:** Alta\
**Esforço de alteração:** Leve

## 7 - Imagem da estante vazia não possui contraste
Problema ocorre quando acessamos a página minha estante e ela está vazia. A imagem que indica que não há livros na estante tem um texto que não possui contraste com o fundo.

**Diretriz ferida:** FM11 - Contraste\
**Sugestão de melhoria:** Alterar as cores da imagem para que ela tenha mais contraste com o fundo\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 8 - Imagem de “Sem Livros Por Aqui” não possui contraste
Problema ocorre quando clicamos no botão “Adicionar Livro” na página “Minha Estante”. É exibida uma imagem que não tem contraste com o fundo.

**Diretriz ferida:** FM11 - Contraste\
**Sugestão de melhoria:** Alterar as cores da imagem para que ela tenha mais contraste com o fundo\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 9 - Os botões para acessar perfil e fazer logout não ficam visíveis quando a tela é ajustada
Problema ocorre quando ajustamos o tamanho da tela para ficar do tamanho da tela de um dispositivo móvel.

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
**Diretriz ferida:** CO2 - Feedback adequado\
**Sugestão de melhoria:** Implementar uma funcionalidade no frontend para exibição de uma mensagem de erro\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 17 - Background de um botão está na cor errada
O problema ocorre quando o usuário clica no botão “Adicionar Livro” da página “Minha Estante” e é redirecionado para uma página com livros disponíveis no sistema, em que o botão para salvar um livro na estante Desejo Ler está com uma cor de fundo diferente da paleta de cores definida.

**Diretriz ferida:** FM12 - Paleta de cor, FM6 - Consistência interna\
**Sugestão de melhoria:** Alterar a cor do background do botão\
**Gravidade:** Baixa\
**Esforço de alteração:** Leve

## 18 - Botão para salvar livro na estante desejo ler não funciona
O problema ocorre quando o usuário clica no botão “Adicionar Livro” da página “Minha Estante” e é redirecionado para uma página com livros disponíveis no sistema. Quando o botão para salvar um livro na estante Desejo Ler é clicado, ele não é adicionado a estante.



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
**Diretriz ferida:**  NA4 - Migalhas de pão\
**Sugestão de melhoria:** Implementar as migalhas de pão logo abaixo do header.\
**Gravidade:** Média\
**Esforço de alteração:** Leve

## 26 - A tela de detalhamento de livros não se reajusta com o tamanho da tela
A página não se adequa ao tamanho da tela de forma satisfatória ao reduzirmos o tamanho da janela, gerando um scroll horizontal. Além disso, não há uma adequação do texto e do header nessa situação. 

**Diretriz ferida:**  PD3 – Responsividade\
**Sugestão de melhoria:** Reajuste do código fonte para que o navegador do header se transforme em um menu lateral reduzido e que o texto da página acompanhe o tamanho da tela.\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 27 - A página da estante não se reajusta com o tamanho da tela
A página de minha estante não se adequa ao tamanho da tela de forma satisfatória ao reduzirmos o tamanho da tela, gerando um scroll horizontal. Além disso, não há uma adequação dos itens da página nessa situação.

**Diretriz ferida:**  PD3 – Responsividade\
**Sugestão de melhoria:** Reajuste para que o navegador do header se transforme em um menu lateral reduzido e que os cards se ajustem de forma que exista um padding equidistante ao redor de todo o conteúdo em todas as situações.\
**Gravidade:** Média\
**Esforço de alteração:** Moderado

## 28 - Ícones nos botões não possuem uma consistência
Em alguns botões os ícones não estão no mesmo lado
 

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





