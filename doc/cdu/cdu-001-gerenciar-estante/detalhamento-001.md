# CDU001. Gerenciar estante

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: O leitor poderá gerenciar a estante na parte de "minha estante" do site, no qual poderá ver uma lista de livros de acordo com a situação deles e adicionar mais livros para ler.
- **Pré-condição**: Ser usuário do tipo leito e estar logado no sistema.
- **Pós-Condição**: estante atualizada. 

## Fluxo Principal
&emsp; 01. O leitor clicará no botão da estante <br>
&emsp; 02. O sistema irá mostrar uma tela padrão com uma listagem de livros que estão sendo lidos no momento<br>

## Fluxo Alternativo I - Leitor quer abrir lista de livros do "desejo ler"
&emsp; O leitor seleciona o dropdown para a opção "desejo ler" e o sistema mostrará uma listagem de livros favoritados pelo usuário.

## Fluxo Alternativo II - Leitor quer abrir lista de livros do "livros concluídos"
&emsp; O leitor seleciona o dropdown para a opção "concluídos" e o sistema mostrará uma listagem de livros concluidos pelo usuário.

## Fluxo Alternativo III - Leitor deseja adicionar livro na estante "desejo ler"
&emsp; O leitor clica no botão adicionar livro, o sistema mostra um pop-up para pesquisar (ponto de extensão) o livro, o usuário adiciona o livro selecionado e vai para lista de desejo ler.

## Fluxo de Exceção

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

![CDU_001](../../projeto/CDU_001.jpg)
