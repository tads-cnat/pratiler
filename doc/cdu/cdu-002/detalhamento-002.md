# CDU002. Gerenciar feed 

- **Ator principal**: Leitor
- **Atores secundários**: ...	 
- **Resumo**: O leitor poderá gerenciar seu feed, navegando e gerenciando e explorando as funcionalidades das páginas de "Desafios", "Minha estante", "Livros populares" e "Seguindo"
- **Pré-condição**: Estar autenticado no sistema
- **Pós-Condição**: O feed do leitor deve estar atualizado de acordo com suas preferências no gerenciamento

## Fluxo Principal
&emsp;&emsp;Após se autenticar, o leitor verá a página de "Minha Estante", onde poderá consultar os livros que inseriu por sua preferência, nesta consulta pode-se ver o nome, descrição, capa, autor do livro e nº de páginas.<br>
&emsp;&emsp;Nesta página, o leitor tem a opção de adicionar mais livros para a listagem de "desejo ler", consultar os livros já lidos na listagem de "lidos", e consultar seus livros que está lendo no momento na listagem de "lendo". Nesta última listagem, o leitor poderá atualizar o nº de páginas lidas ao postar um comentário sobre o que leu entre a página que iniciou ou voltou a leitura e a página que terminou.

## Fluxo Alternativo I - Página "Livros populares"
&emsp;&emsp;O leitor após se autenticar, pode navegar para a página "Livros populares", onde terão os livros mais populares atualmente rankeados por números ordinais(1º, 2º, ...). Em consulta, poderão ser vistos a capa, o título, a descrição e a quantidade de pessoas que leram este livro.<br>
&emsp;&emsp;Nesta página, também há a funcionalidade de adicionar a lista de livros "desejo ler", caso seja de desejo do leitor, sendo uma segunda opção para adicionar livros às suas listas.

## Fluxo Alternativo III - Página "Seguindo"
&emsp;&emsp;O leitor após se autenticar, pode navegar para a página "Seguindo", onde poderá ver com mais facilidade as postagens de seus seguidores, postagens essas que tem como informações, foto e nome do usuário que postou, o nome do livro tema do *post*, páginas lidas no momento da postagem, e o comentário postado.<br>
&emsp;&emsp;Nestas postagens, os leitores que visualizarem, podem curtir o comentário, ou comentar sobre o comentário, servindo como uma resposta ao comentário, como um meio de socialização.

## Fluxo Alternativo IV - Página "Perfil"
&emsp;&emsp;Ao clicar no ícone que redireciona ao perfil do próprio leitor, ele poderá visualizar o seu username, sua biografia, foto de perfil e capa do perfil. Além disso, é informado também a quantidade de seguidores que o leitor possui e a quantidade de leitores que ele segue.<br>
&emsp;&emsp;Também terá a opção de acessar as configurações e alterar essas informações sobre seu perfil.

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
