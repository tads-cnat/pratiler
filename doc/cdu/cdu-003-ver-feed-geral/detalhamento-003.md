# CDU003. Ver feed geral

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: Leitor poderá visualizar um feed com todos os comentários do sistema.
- **Pré-condição**: O leitor deve estar autenticado no sistema.
- **Pós-Condição**: O leitor visualiza a lista de comentários no feed.

## Fluxo Principal
&emsp;1. O leitor acessa a página do feed. <br>
&emsp;2. O sistema recupera e organiza os comentários feitos no sistema, incluindo aqueles feitos por pessoas que o leitor segue e por outros usuários. <br>
&emsp;3. O sistema exibe os comentários no feed, mostrando informações relevantes como o nome do usuario, data do comentário, texto do comentário e informações do livro lido. <br>
&emsp;4. O leitor pode rolar a página para ver mais comentários conforme eles são carregados. <br>
&emsp;5. O leitor pode interagir com os comentários, por exemplo, curtindo ou respondendo a eles. <br>

## Fluxo de Exceção I - Feed vazio
1. &emsp;Se não houver comentários disponíveis para exibir no feed:
   - &emsp;O sistema exibe uma mensagem informando que não há comentários disponíveis no momento.

## Diagrama de Interação (Sequência ou Comunicação)

![CDU_017](../sequencia/VerFeedGeral%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
