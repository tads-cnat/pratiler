# CDU017. Gerenciar meu perfil

- **Ator principal**: Leitor
- **Atores secundários**: 
- **Resumo**: O leitor poderá gerenciar e explorar seu perfil, acessando páginas como "Atualizações recentes", "Listas de livros" e "Resenhas".
- **Pré-condição**: Estar autenticado no sistema
- **Pós-Condição**: O perfil do leitor deve estar atualizado de acordo com sua preferência no gerenciamento

## Fluxo Principal
&emsp;&emsp;Ao entrar na página de perfil, o usuário terá acesso às suas postagens mais recentes, em que ele poderá visualizar os últimos comentários que realizou sobre os livros. Além disso, haverá uma área em que ele poderá criar uma nova postagem, em que ele colocará o livro que está sendo lido, a página em que terminou a atual leitura e um comentário que diga o que ele está pensando sobre o livro nesta nova leitura realizada. Ao fazer isso, a página será atualizada com mais uma nova postagem.<br>
&emsp;&emsp;O usuário terá acesso, também, ao seu perfil de usuário que possui informações sobre o mesmo, com foto de perfil, nome do usuário, *username* identificador, bio do perfil, o número de pessoas que o leitor segue e o número de pessoas que seguem o leitor.

## Fluxo Alternativo I - Página "Minha estante"
&emsp;&emsp;Essa página irá demonstrar 3 tipos de lista. A primeira se trata dos livros que estão sendo lidos pelo leitor, chamada de "Leituras atuais", a segunda mostra os livros que o leitor deseja ler futuramente, chamada de "Livros para ler" e a terceira mostra os livros que o leitor terminou de ler, chamada de "Livros lidos".<br>
&emsp;&emsp;A lista de "Desejo ler" possuirá um formato "to-do list", e ao clicar no ícone para indicar que o leitor começou a leitura, o livro será redirecionado para a primeira lista e aparecerá um pop-up para o leitor adicionar o primeiro comentário sobre o livro.<br>
&emsp;&emsp;Haverá também três botões em cada lista. Na lista "Leituras atuais", será para adicionar uma postagem sobre um livro que está sendo lido. Na lista "Livros para ler", será para adicionar um novo livro à lista. E na lista "Livros lidos", será para adicionar uma nova avaliação sobre um livro que o leitor terminou de ler, contendo nota de 1 a 5 e também a possibilidade de um texto justificando a sua nota, se for o desejo do leitor.

## Fluxo Alternativo II - Página "Resenhas"
&emsp;&emsp;Essa página mostrará breves detalhes sobre resenhas sobre livros escritas pelo leitor, que se tratam de uma discussão mais extensa sobre um livro, discussão essa que não caberia em um comentário, contendo um título para a resenha e o texto em si.<br>
&emsp;&emsp;Além disso, haverá também um botão para adicionar uma nova resenha.

## Fluxo Alternativo III - Página "Resenha de um livro"
&emsp;&emsp;Essa página se tratará de uma resenha específica de um livro, que pode ser acessada pela página do fluxo alternativo II. Ela mostrará a resenha em si, com o texto, título e o nome do leitor que escreveu a resenha.<br>
&emsp;&emsp;Haverá também um botão para o leitor que desenvolveu a resenha editar a resenha que escreveu.

## Fluxo Alternativo IV - Configurações do perfil
&emsp;&emsp;O usuário dono do perfil terá acesso a um botão que o redirecionará para as configurações, em que ele pode alterar algumas de suas informações de cadastro, como nome, bio, foto, ou sua senha, se for do seu interesse.<br>

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

![CDU_017](../../projeto/CDU_017.jpg)
