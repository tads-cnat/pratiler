# CDU002. Gerenciar feed 

- **Ator principal**: Leitor
- **Atores secundários**:
- **Resumo**: O leitor poderá gerenciar seu feed, navegando, gerenciando e explorando as funcionalidades das páginas de "Minha estante", "Livros populares" e "Seguindo"
- **Pré-condição**: Estar autenticado no sistema como usuário leitor
- **Pós-Condição**: O feed do leitor deve estar atualizado de acordo com suas preferências no gerenciamento

## Fluxo Principal
&emsp;&emsp;O leitor após se autenticar, pode navegar para a página "Seguindo", onde poderá ver com mais facilidade as postagens dos usuários que ele segue, postagens essas que tem como informações, foto e nome do usuário que postou, o nome do livro tema do *post*, páginas lidas no momento da postagem e o comentário postado.<br>
&emsp;&emsp;Nestas postagens, os leitores que visualizarem, podem curtir o comentário ou respondê-lo, servindo como um meio de socialização.

## Fluxo Alternativo I - Página "Livros populares"
&emsp;&emsp;O leitor após se autenticar, pode navegar para a página "Livros populares", onde terão os livros mais populares entre os usuários do sistema rankeados por números ordinais(1º, 2º, ...). Em consulta, poderão ser vistos a capa, o título, a descrição e a quantidade de pessoas que leram este livro.<br>
&emsp;&emsp;Nesta página, também há a funcionalidade de adicionar a lista de livros "desejo ler", caso seja de desejo do leitor, sendo uma segunda opção para adicionar livros às suas listas, ou iniciar a leitura do livro, sendo possível que o leitor já poste um comentário sobre o livro.

## Fluxo Alternativo II - Página "Minha estante"
&emsp;&emsp;Ponto de extensão para o caso de uso Gerenciar Estante.


## Fluxo Alternativo III - Página "Perfil"
&emsp;&emsp;Ao clicar no ícone que redireciona ao perfil do próprio leitor, ele será redirecionado ao caso de uso 3.<br>

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
