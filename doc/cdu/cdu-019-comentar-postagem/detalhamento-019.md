# CDU019. Comentar postagem

- **Ator principal**: Leitor
- **Atores secundários**:
- **Resumo**: O leitor poderá fazer um comentário sobre um comentário relacionado a página que um leitor parou de um livro.
- **Pré-condição**: Ser usuário do tipo leitor e estar logado no sistema
- **Pós-Condição**: Um novo comentário é adicionado em comentário existente

## Fluxo Principal
&emsp;01. O leitor na página "Seguindo", clica em um local de comentário de um comentário especifico<br>
&emsp;02. O sistema abre um espaço para comentário do comentário<br>
&emsp;03. O leitor escreve o comentário<br>
&emsp;04. O leitor clica em salvar o comentário<br>
&emsp;05. O sistema salva e é adicionado aos comentários.<br>

## Fluxo Alternativo I - O leitor tenta sair sem enviar o comentário
&emsp;&emsp;04.a. Se o leitor não clicar em salvar o comentário, o sistema exibe uma mensagem perguntando se o leitor quer ir embora sem salvar ou decide salvar.  Se ele quiser salvar, voltar para fluxo principal 05.

## Fluxo Exceção I - 

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
