# CDU013. Pesquisar livros

- **Ator principal**: Moderador
- **Atores secundários**:	 
- **Resumo**: Moderador poderá filtrar os livros através de uma pesquisa.
- **Pré-condição**: Estar autenticado no sistema como usuário moderador.
- **Pós-Condição**: Retorna uma lista de livros ou um único livro de acordo com o texto da pesquisa.

## Fluxo Principal
1. &emsp;O moderador acessa a página de pesquisa de livros.
2. &emsp;O moderador insere o texto da pesquisa no campo apropriado.
3. &emsp;O sistema processa a pesquisa e filtra os livros de acordo com o texto inserido.
4. &emsp;O sistema exibe a lista de livros que correspondem aos critérios de pesquisa.
5. &emsp;O moderador visualiza a lista de livros filtrados.

## Fluxo de Exceção I - Nenhum autor encontrado
1. &emsp;Se o sistema não encontrar nenhum livro que corresponda ao texto da pesquisa, ele exibirá uma mensagem informando que nenhum livro foi encontrado.
2. &emsp;O moderador pode:
   - &emsp;Modificar o texto da pesquisa e tentar novamente.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...