# CDU003. Gerenciar perfil

- **Ator principal**: Leitor
- **Atores secundários**: 
- **Resumo**: O leitor poderá gerenciar e explorar seu perfil, acessando páginas como "Atualizações recentes", "Listas de livros" e "Resenhas".
- **Pré-condição**: Estar autenticado no sistema como usuário leitor
- **Pós-Condição**: O perfil do leitor deve estar atualizado de acordo com sua preferência no gerenciamento

## Fluxo Principal
&emsp;&emsp;Ao entrar na página de perfil, o usuário terá acesso às suas postagens mais recentes, em que ele poderá visualizar os últimos comentários e avaliações que realizou sobre os livros. Além disso, haverá uma área em que ele poderá criar uma nova postagem, em que ele colocará o livro que está sendo lido, a página em que ele começou a leitura e a página em que terminou, além de um comentário que diga o que ele está pensando sobre o livro. Ao fazer isso, a página será atualizada com mais uma nova postagem.<br>
&emsp;&emsp;O usuário terá acesso, também, ao seu perfil de usuário que possui informações sobre o mesmo, com foto de perfil, foto de capa, nome do usuário, username identificador, o número de pessoas que o leitor segue e o número de pessoas que seguem o leitor. Além disso, terá um botão que o redirecionará para as configurações, em que ele pode alterar algumas dessas informações. Essa tela estará presente em todos os fluxos desse caso de uso.

## Fluxo Alternativo I - Página "Minha estante"
&emsp;&emsp;Essa página irá demonstrar 3 tipos de lista. A primeira se trata dos livros que estão sendo lidos pelo leitor, a segunda mostra os livros que o leitor deseja ler futuramente e a terceira mostra os livros que o leitor terminou de ler e aos quais ele adicionou uma nota e um comentário de avaliação.<br>
&emsp;&emsp;A segunda lista possuirá um formato "to-do list", e ao clicar no ícone para indicar que o leitor começou a leitura, o livro será redirecionado para a primeira lista e aparecerá um pop-up para o leitor adicionar o primeiro comentário sobre o livro.<br>
&emsp;&emsp;Haverá também três botões em cada lista. Na primeira, será para adicionar uma postagem sobre um livro que está sendo lido. Na segunda, será para adicionar um novo livro à lista. E na terceira, será para adicionar uma nova avaliação sobre um livro que o leitor terminou de ler.

## Fluxo Alternativo II - Página "Resenhas"
&emsp;&emsp;Essa página mostrará breves detalhes sobre resenhas sobre livros escritas pelo leitor, que se tratam de uma discussão mais extensa sobre um livro, discussão essa que não caberia em um comentário. Haverá uma parte para mostrar as resenhas em destaque e outra para exibir todas as resenhas.<br>
&emsp;&emsp;Além disso, haverá também um botão para adicionar uma nova resenha.

## Fluxo Alternativo III - Página "Resenha de um livro"
&emsp;&emsp;Essa página se tratará de uma resenha específica de um livro, que pode ser acessada pela página do fluxo alternativo II. Ela mostrará a resenha em si, com o texto, título e o nome do leitor que escreveu a resenha.<br>
&emsp;&emsp;Haverá também um botão para que o leitor possa editar a resenha que escreveu.


> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
