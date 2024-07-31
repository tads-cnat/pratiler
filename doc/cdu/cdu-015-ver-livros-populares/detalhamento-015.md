# CDU015. Ver livros populares

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: Leitor poderá visualizar uma lista de livros populares no sistema.
- **Pré-condição**: O leitor deve estar autenticado no sistema.
- **Pós-Condição**: O leitor visualiza a lista de livros populares.

## Fluxo Principal
1. &emsp;O leitor acessa a página de livros populares.
2. &emsp;O sistema recupera a lista de livros populares.
3. &emsp;O sistema exibe a lista de livros populares na página, mostrando informações relevantes como título, autor, sinopse e classificação.
4. &emsp;O leitor pode visualizar detalhes adicionais de um livro específico clicando nele.

## Fluxo de Exceção I - Nenhum livro popular disponível
1. &emsp;Se não houver livros populares disponíveis no momento:
   - &emsp;O sistema exibe uma mensagem informando que não há livros populares disponíveis atualmente.
   - &emsp;O leitor pode retornar à página inicial ou tentar novamente mais tarde.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...