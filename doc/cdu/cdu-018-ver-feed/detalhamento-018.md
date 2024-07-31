# CDU018. Ver feed

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: Leitor poderá visualizar um feed com todos os comentários do sistema, incluindo aqueles de pessoas que ele segue e de outras pessoas.
- **Pré-condição**: O leitor deve estar autenticado no sistema.
- **Pós-Condição**: O leitor visualiza a lista de comentários no feed.

## Fluxo Principal
1. &emsp;O leitor acessa a página do feed.
2. &emsp;O sistema recupera e organiza os comentários feitos no sistema, incluindo aqueles feitos por pessoas que o leitor segue e por outros usuários.
3. &emsp;O sistema exibe os comentários no feed, mostrando informações relevantes como o nome do usuario, data do comentário, texto do comentário e etc.
4. &emsp;O leitor pode rolar a página para ver mais comentários conforme eles são carregados.
5. &emsp;O leitor pode interagir com os comentários, por exemplo, curtindo ou respondendo a eles.

## Fluxo de Exceção I - Feed vazio
1. &emsp;Se não houver comentários disponíveis para exibir no feed:
   - &emsp;O sistema exibe uma mensagem informando que não há comentários disponíveis no momento.
