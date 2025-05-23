# 📋 Gerência de Projeto 

Aqui ficarão guardados os artefatos referentes ao gerenciamento do projeto.

## 👨‍💼 Registro das partes interessadas

![PartesInteressadas](partes_interessadas.png)

## 📊 Planejamento do Escopo

### Objetivo S.M.A.R.T - Aumentar a porcentagem de leitores no Brasil para 50% nos próximos 5 anos através de incentivo e interação social entre leitores

### Declaração do Escopo

|||
|:-|:-|
| Escopo do produto e critérios de aceitação | Sistema para organizar e acompanhar o progresso em leituras. O produto será aceito quando o sistema estiver implantado na nuvem com um pipelines de CI/CD e tiverem sido criados os devidos testes e documentações para ele |
| Entregas do projeto | Sistema distribuído com Front-end integrado com o Back-end e banco de dados<br><br>Sistema disponível em máquinas virtuais que executam pipelines CI/CD<br><br>Testes unitários e de integração do sistema<br><br>Documento do projeto |
| Exclusões do projeto | Funcionalidade para acessar a leitura de livros no próprio sistema |
| Restrições  | Prazos para realizar entregas do projeto |
| Premissas  | Funcionalidade de seguir leitores a fim de acompanhar suas interações e leituras |


### Estrutura Analítica do Projeto (EAP)

```mermaid
graph TD
    A[📖PratiLer] --> B[Web]
    A --> C[Distribuído]
    A --> D[Corporativo]
    B --> B1[Levantamento de requisitos]
    B --> B2[Desenvolvimento Frontend (HTML/CSS)]
    B --> B3[Protótipo de telas (Figma)]
    B --> B4[Arquitetura monolítica]
    C --> C1[Levantamento de requisitos]
    C --> C2[Banco de dados Postgres]
    C --> C3[Protótipos de telas (Figma)]
    C --> C4[Arquitetura distribuída]
    C --> C5[Frontend React]
    C --> C6[API Django Ninja]
    D --> D1[Levantamento de requisitos]
    D --> D2[Implantação em nuvem]
    D --> D3[Avaliação Heurística]
    D --> D4[Testes Unitários]
    D --> D5[Planejamento]
```

### Dicionário da EAP

| Atividade | Descrição | Responsáveis | Critérios de Aceitação |
| - | - | - | - |
| Levantamento de Requisitos | Analisar continuamente as necessidades do projeto para criar novos requisitos | Débora, Ester, Felipe, João Roberto | Todos os requisitos e regras de negócio devem estar claras e estabelecidas |
| Implantação na nuvem | Alocação do código do Pratiler em um servidor on-line para acesso público | João Roberto | O sistema deve estar acessível e operante através do endereço IP atribuído a máquina hospedada |
| Avaliação heurística | Avaliação das páginas do sistema | Débora, Ester, Felipe, João Roberto | O sistema deve melhorar sua usabilidade após avaliação |
| Testes unitários | Implementação e documentação dos testes unitários | Débora, Ester, Felipe, João Roberto | Testes criados de formas estratégicas |
| Planejamento | Planejamento Semanal das atividades do projeto | Débora, Ester, Felipe, João Roberto | As sprints devem ser planejadas em documentação |