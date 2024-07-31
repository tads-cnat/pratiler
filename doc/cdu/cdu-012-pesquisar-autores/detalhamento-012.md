# CDU012. Pesquisar autores

- **Ator principal**: Moderador
- **Atores secundários**:	 
- **Resumo**: Moderador poderá filtrar os autores através de uma pesquisa.
- **Pré-condição**: Estar autenticado no sistema como usuário moderador.
- **Pós-Condição**: Retorna uma lista de autores ou um único autor de acordo com o texto da pesquisa.

## Fluxo Principal
1. &emsp;O moderador acessa a página de pesquisa de autores.
2. &emsp;O moderador insere o texto da pesquisa no campo apropriado.
3. &emsp;O sistema processa a pesquisa e filtra os autores de acordo com o texto inserido.
4. &emsp;O sistema exibe a lista de autores que correspondem aos critérios de pesquisa.
5. &emsp;O moderador visualiza a lista de autores filtrados.

## Fluxo de Exceção I - Nenhum autor encontrado
1. &emsp;Se o sistema não encontrar nenhum autor que corresponda ao texto da pesquisa, ele exibirá uma mensagem informando que nenhum autor foi encontrado.
2. &emsp;O moderador pode:
   - &emsp;Modificar o texto da pesquisa e tentar novamente.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...