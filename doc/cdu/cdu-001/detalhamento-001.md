# CDU001. Gerenciamento do moderador

- **Ator principal**: Moderador
- **Atores secundários**:	 
- **Resumo**: Moderador poderá editar, adicionar, ou excluir desafios do sistema
- **Pré-condição**: Estar autenticado no sistema
- **Pós-Condição**: A lista de desafios e de livros deve estar atualizada de acordo com o gerenciamento do moderador

## Fluxo Principal
&emsp;&emsp;O moderador será direcionado à uma página em que os desafios estão listados. Nessa página, ele poderá acessa também outra página em que são listados os livros que foram registrados no sistema.<br>
&emsp;&emsp;Na página em que o moderador se encontrá, ele poderá acessar a página para editar um desafio ou um livro específicos.<br>
&emsp;&emsp;Após terminar a edição, irá salvá-las e as alterações feitas serão salvas no sistema de acordo com o que o moderador editou.

## Fluxo Alternativo I - Editar desafios
&emsp;&emsp;O moderador terá acesso à uma página que exibe os desafios que estão registrados no sistema. Ele poderá clicar em um dos desafios para editar ou deletar.<br>
&emsp;&emsp;Haverá, também, um botão em que ele poderá adicionar novos desafios, inserindo informações como nome, descrição e quantidades de leitores vinculados.<br>
&emsp;&emsp;O moderador deve salvar as alterações depois de terminá-las, para que sejam registradas no sistema.

## Fluxo Alternativo II - Editar livros
&emsp;&emsp;O moderador terá acesso à uma página que exibe os livros que estão registrados no sistema. Ele poderá clicar em um dos livros para editar ou deletar.<br>
&emsp;&emsp;Haverá, também, um botão em que ele poderá adicionar novos livros, inserindo informações como título, sinopse, autor e quantidade de páginas.<br>
&emsp;&emsp;O moderador deve salvar as alterações depois de terminá-las, para que sejam registradas no sistema.

## Fluxo de Exceção I - Alterações não salvas
&emsp;&emsp;Após terminar as alterações e o moderador tentar sair da página, ele será notificado que suas alterações feitas não foram salvas e lhe dará a opção de salvar, ou sair sem salvar.<br>
&emsp;&emsp;Indo na funcionalidade de salvar, os dados serão salvos e atualizados corretamente, caso a decisão seja de sair sem salvar, suas alterações não serão consideradas.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
