# CDU001. Gerenciar livros

- **Ator principal**: Moderador
- **Atores secundários**:	 
- **Resumo**: Moderador poderá editar, adicionar, ou excluir livros do sistema
- **Pré-condição**: Estar autenticado no sistema como usuário moderador
- **Pós-Condição**: A lista de livros deve estar atualizada de acordo com o gerenciamento do moderador

## Fluxo Principal
&emsp;&emsp;O moderador será direcionado à uma página em que os livros registrados no sistema estão listados. Nessa página, ele poderá gerenciar os livros da maneira que achar melhor para o sistema.<br>
&emsp;&emsp;Na página em que o moderador se encontrá, ele poderá acessar a página para editar, adicionar, ou excluir um livro específico.<br>
&emsp;&emsp;Após terminar a edição, irá salvá-las e as alterações feitas serão salvas no sistema de acordo com o que o moderador editou.

## Fluxo Alternativo I - Editar livros
&emsp;&emsp;O moderador terá acesso à uma página que exibe os livros que estão registrados no sistema. Ele poderá clicar em um dos livros para editar, alterando suas informações.<br>
&emsp;&emsp;Haverá, também, um botão em que ele poderá adicionar novos livros, inserindo informações como título, sinopse, autor e quantidade de páginas.<br>
&emsp;&emsp;O moderador também terá a opção de deletar um livro se necessário, selecionando a opção e apagando o livro do sistema após confirmação.<br>
&emsp;&emsp;O moderador deve salvar as alterações depois de terminá-las, para que sejam registradas no sistema.

## Fluxo de Exceção I - Alterações não salvas
&emsp;&emsp;Após terminar as alterações e o moderador tentar sair da página, ele será notificado que suas alterações feitas não foram salvas e lhe dará a opção de salvar, ou sair sem salvar.<br>
&emsp;&emsp;Indo na funcionalidade de salvar, os dados serão salvos e atualizados corretamente, caso a decisão seja de sair sem salvar, suas alterações não serão consideradas.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

![CDU_001](../sequencia/GerenciarLIvros%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto

![CDU_001](../../projeto/CDU_001.jpg)
