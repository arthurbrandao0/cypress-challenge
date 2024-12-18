
# Projeto de Testes Automatizados com Cypress

Este projeto realiza testes automatizados E2E (End-to-End) para o **Frontend** e **API** do sistema **Serverest** a fim de demonstração.

---

## Objetivo

Automatizar cenários de testes E2E para:

- Frontend: [https://front.serverest.dev/](https://front.serverest.dev/) (3 cenários)
- API: [https://serverest.dev/](https://serverest.dev/) (3 cenários)

---

## Estrutura do Projeto

```plaintext
cypress-challenge/
├── cypress/
│   ├── e2e/                     # Testes automatizados
│   │   ├── frontend/            # Testes E2E do frontend
│   │   └── api/                 # Testes da API
│   ├── fixtures/                # Dados de usuários
│   ├── support/                 # Comandos personalizados
│   └── cypress.config.js        # Configurações do Cypress
├── package.json                 # Dependências e scripts
├── README.md                    # Documentação do projeto
└── .gitignore                   # Arquivos a serem ignorados
```

---

## Pré-requisitos

- **Node.js** instalado (versão 14 ou superior)
- **Cypress** instalado globalmente ou como dependência do projeto
- **Git** para versionamento do código

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/arthurbrandao0/cypress-challenge.git
   cd cypress-challenge
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

---

## Execução dos Testes

### Executar Todos os testes

```bash
npx cypress run
```

### Executar somente Testes do Frontend

```bash
npx cypress run --spec "cypress/e2e/frontend/*.cy.js"
```

### Executar somente Testes da API

```bash
npx cypress run --spec "cypress/e2e/api/*.cy.js"
```

### Executar o Cypress no Modo Interativo

```bash
npx cypress open
```

---

## Comandos Personalizados

Caso precise criar comandos customizados, utilize o arquivo:

```plaintext
cypress/support/commands.js
```