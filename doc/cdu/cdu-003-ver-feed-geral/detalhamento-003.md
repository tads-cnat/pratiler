# CDU003. Ver feed geral

- **Ator principal**: Leitor
- **Atores secundários**:
- **Resumo**: Leitor poderá visualizar um feed com todas as postagens do sistema.
- **Pré-condição**: O leitor deve estar autenticado no sistema.
- **Pós-Condição**: O leitor visualiza a lista de postagens no feed.

## Fluxo Principal

1. &emsp; O leitor acessa a página do feed. <br>
2. &emsp; O sistema recupera e organiza as postagens feitas no sistema. <br>
3. &emsp; O sistema exibe as postagens no feed, mostrando informações relevantes como o nome do usuario, data da postagem, texto da postagem e informações do livro lido. <br>
4. &emsp; O leitor pode rolar a página para ver mais postagens conforme elas são carregadas. <br>
5. &emsp; O leitor pode interagir com as postagens, por exemplo, curtindo ou respondendo a eles. <br>

## Fluxo de Exceção I - Feed vazio

1. &emsp;Se não houver postagens disponíveis para exibir no feed:
   - &emsp;O sistema exibe uma mensagem informando que não há postagens disponíveis no momento.

## Diagrama de Interação (Sequência ou Comunicação)

![CDU_017](../sequencia/VerFeedGeral%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
