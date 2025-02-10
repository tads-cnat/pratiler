# CDU001. Gerenciar estante

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: O leitor poderá gerenciar a estante na parte de "minha estante" do site, no qual poderá ver uma lista de livros de acordo com a situação deles e adicionar mais livros para ler.
- **Pré-condição**: Estar logado no sistema.
- **Pós-Condição**: A estante deve estar atualizada de acordo com as alterações do usuário. 

## Fluxo Principal
&emsp; 01. O leitor clicará na aba da "**minha estante**" <br>
&emsp; 02. O sistema irá mostrar uma tela padrão com uma listagem de livros que estão sendo lidos no momento<br>

## Fluxo Alternativo I - Leitor quer abrir lista de livros do "desejo ler"
&emsp; O leitor seleciona o dropdown para a opção "desejo ler" e o sistema mostrará uma listagem de livros favoritados pelo usuário.

## Fluxo Alternativo II - Leitor quer abrir lista de livros do "livros concluídos"
&emsp; O leitor seleciona o dropdown para a opção "concluídos" e o sistema mostrará uma listagem de livros concluidos pelo usuário.

## Fluxo Alternativo III - Leitor deseja adicionar livro na estante
&emsp; O leitor clica no botão adicionar livro na listagem de preferência, e então o sistema mostra um pop-up para pesquisar (ponto de extensão) um livro, retornando uma listagem com todos os resultados, e apenas os livros que não estão relacionados ao usuário disponíveis para adição. E então, o usuário adiciona o livro selecionado a listagem que ele escolheu.

## Fluxo de Exceção

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

![CDU_001](../../projeto/CDU_001.jpg)
