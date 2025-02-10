# CDU004. Pesquisar livros

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: Leitor poderá filtrar os livros através de uma pesquisa.
- **Pré-condição**: Estar autenticado no sistema como usuário Leitor.
- **Pós-Condição**: Retorna uma lista de livros de acordo com o texto da pesquisa.

## Fluxo Principal
&emsp;1. O Leitor acessa o campo de pesquisa. <br>
&emsp;2. O Leitor insere o texto da pesquisa no campo apropriado. <br>
&emsp;3. O sistema processa a pesquisa e filtra os livros de acordo com o texto inserido.<br>
&emsp;4. O sistema exibe a lista de livros que correspondem aos critérios de pesquisa. <br>
&emsp;5. O Leitor visualiza a lista de livros filtrados. <br>

## Fluxo de Exceção I - Nenhum livro encontrado
1. &emsp;Se o sistema não encontrar nenhum livro que corresponda ao texto da pesquisa, ele exibirá uma mensagem informando que nenhum livro foi encontrado.
2. &emsp;O Leitor pode:
   - &emsp;Modificar o texto da pesquisa e tentar novamente.

## Diagrama de Interação (Sequência ou Comunicação)

![CDU_013](../sequencia/PesquisarLivro%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto
