# CDU011. Gerenciar autores

- **Ator principal**: Moderador
- **Atores secundários**:	 
- **Resumo**: Moderador poderá editar, adicionar, ou excluir autores do sistema.
- **Pré-condição**: Estar autenticado no sistema como usuário moderador.
- **Pós-Condição**: A lista de autores deve estar atualizada de acordo com o gerenciamento do moderador.

## Fluxo Principal
1. &emsp;O moderador será direcionado a uma página onde os autores registrados no sistema estão listados.
2. &emsp;Na página, ele poderá:
   - &emsp;Editar um autor existente, alterando suas informações.
   - &emsp;Adicionar um novo autor, inserindo informações como nome.
   - &emsp;Excluir um autor existente, selecionando a opção de deletar e confirmando a ação.
3. &emsp;Após terminar as alterações (edição, adição ou exclusão), o moderador deve salvar as alterações para que sejam registradas no sistema.

## Fluxo de Exceção I - Alterações não salvas
1. &emsp;Se o moderador tentar sair da página sem salvar as alterações, ele será notificado de que suas alterações não foram salvas.
2. &emsp;Ele terá a opção de:
   - &emsp;Salvar as alterações, fazendo com que os dados sejam salvos e atualizados corretamente.
   - &emsp;Sair sem salvar, fazendo com que as alterações não sejam consideradas.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...