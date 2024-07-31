
## Fluxo Principal
1. O leitor clicará em um botão para atualizar leitura.
2. O sistema irá mostrar uma tela de comentário com dados de página final e um campo para comentário opcional.
3. O leitor preenche as informações e clica em enviar.
4. O sistema salva os dados e atualiza a quantidade de páginas lidas no sistema.
5. O sistema confirma a atualização para o leitor.

## Fluxo Alternativo
- **2a.** Se o leitor não quiser preencher um comentário, ele pode deixar o campo de comentário vazio e prosseguir para o próximo passo.
- **4a.** Se houver algum erro no salvamento dos dados, o sistema exibe uma mensagem de erro e permite que o leitor tente novamente.
--------------------------
# CDU019. Atualizar leitura

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: O leitor 
- **Pré-condição**: Ser usuário do tipo leitor e estar logado no sistema 
- **Pós-Condição**: Quantidade de páginas lidas do seu livro atualizada

## Fluxo Principal
&emsp;&ems; 01. O leitor clicará em um botão para atualizar leitura
&emsp;&ems; 02. O sistema irá mostrar uma tela de comentário com dados de página final e um comentário opcional
&emsp;&ems; 03. O leitor preenche as informações e clica em enviar/salvar
&emsp;&ems; 04. O sistema salva os dados e salva as alterações no sistema
&emsp;&ems; 05. O sistema exibe uma mensagem de que ocorreu tudo bem e as alterações foram salvas.

## Fluxo Alternativo I - Leitor não preenche o comentário
&emsp;&emsp; 02.a. Se o leitor não preencher o comentário, deixará o campo de texto vazio e vai para o passo 03. seguindo normalmente o fluxo.
## Fluxo Alternativo II - Leitor tenta sair sem salvar as alterações
&emsp;&emsp; 03.a. O leitor tenta sair da tela sem salvar, então o sistema exibe uma mensagem perguntando se ele quer sair da tela mesmo ou salvar as alterações. Se ele quiser salvar, segue para o fluxo principal 04.

## Fluxo de Exceção I - O sistema não consegue salvar as informações
&emsp;&emsp; 04.a. O sistema mostra uma mensagem pedindo para que o leitor envie novamente os dados e segue para o fluxo principal 04.

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
