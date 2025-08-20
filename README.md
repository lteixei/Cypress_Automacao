# 🖥️ Automação de Testes com Cypress

Este repositório apresenta uma base completa para automação de testes utilizando **Cypress**, um framework moderno para testes end-to-end de aplicações web.  

O objetivo é fornecer uma referência completa para criar, organizar e executar testes de forma eficiente, seguindo boas práticas profissionais.

---

## 🚀 Por que utilizar Cypress?

- ✅ Arquitetura moderna e fácil de configurar;  
- ✅ Execução **headless** e em modo **GUI** (navegador real);  
- ✅ Suporte nativo a **retries**, **mocks** e **stubs**;  
- ✅ Relatórios claros e screenshots automáticas;  
- ✅ Integração direta com CI/CD e GitHub Actions.

---

## 🧰 Tecnologias Utilizadas

| Ferramenta           | Descrição                                 |
|---------------------|--------------------------------------------|
| Cypress             | Framework principal para testes web        |
| Node.js             | Ambiente de execução necessário            |
| npm / yarn          | Gerenciador de pacotes                     |
| Mocha & Chai        | Framework de testes e assertions nativo    |
| Faker.js / Chance.js| Geração de dados de teste aleatórios       |

---

## ⚙️ Pré-requisitos  
  
- ✅ Node.js v16 ou superior  
- ✅ Git instalado  
- ✅ Navegador Chrome ou Edge (Firefox também suportado)  
- ✅ (Opcional) Ambiente virtual com `nvm` para gerenciar versões Node


### Verificar versões
- node -v  
- npm -v

---

## 📦 Instalação
### Criar projeto Node
- npm init -y

### Instalar Cypress
- npm install cypress --save-dev

### Abrir Cypress pela primeira vez
- npx cypress open
O comando npx cypress open cria a estrutura inicial e abre a interface visual do Cypress.

---

## 🏗 Estrutura de Projeto Recomendada
📦 cypress-automation/  
├── 📁 cypress/  
│   ├── 📁 e2e/                # Testes end-to-end  
│   │   ├── login.cy.js  
│   │   └── cadastro.cy.js  
│   ├── 📁 fixtures/           # Dados de teste (JSON)  
│   │   └── users.json  
│   ├── 📁 support/            # Comandos customizados e hooks  
│   │   ├── commands.js  
│   │   └── e2e.js  
├── package.json  
├── cypress.config.js          # Configurações do Cypress  
└── README.md  

---

## ▶️ Executando os Testes
### Abrir Cypress em modo GUI
- npx cypress open

### Executar todos os testes em modo headless
- npx cypress run

### Executar testes em um navegador específico
- npx cypress run --browser chrome

### Executar apenas um teste específico
- npx cypress run --spec "cypress/e2e/login.cy.js"

---

## ✅ Boas Práticas

| Dica          ------------------------------------ | Explicação                                      |
|----------------------------------------------------|-------------------------------------------------|
| Separar testes por funcionalidades                 | Facilita manutenção e organização               |
| Utilizar fixtures para dados de teste              | Evita hardcoding e facilita reutilização        |
| Criar comandos customizados                        | Reduz duplicação (cy.login(), cy.fillForm())    |
| Evitar cy.wait() fixo                              | Prefira cy.get().should() ou cy.intercept()     |
| Versionar configurações no cypress.config.js       | Centraliza timeouts, baseUrl, viewport, etc     |
| Capturar screenshots e videos                      | Útil para debug e relatórios                    |

---

## 🔎 Exemplo de Teste Básico

```bash
describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://exemplo.com/login')
    })

    it('Deve realizar login com usuário válido', () => {
        cy.get('#username').type('usuario_teste')
        cy.get('#password').type('senha123')
        cy.get('#login-button').click()
        cy.contains('Bem-vindo').should('be.visible')
    })
})
```
---

## 🔮 Funcionalidades Avançadas

✅ Interceptação de requests: cy.intercept() para mockar APIs;  
✅ Execução paralela em CI/CD para reduzir tempo de teste;  
✅ Testes cross-browser (Chrome, Edge, Firefox);  
✅ Screenshots e gravação de vídeo automático (cypress.config.js);  
✅ Custom commands: comandos reutilizáveis e modulares.  

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Abra uma Issue ou envie um Pull Request com melhorias, novos cenários ou exemplos de integração.

---

## 🤝 Boas práticas para contribuições:

📌 Escreva código limpo, legível e documentado.  
📌 Teste suas mudanças antes de enviar o Pull Request.  
📌 Mantenha a consistência com o estilo e padrões do projeto.  
📌 Discuta melhorias ou dúvidas antes de implementar grandes mudanças.

---

## 👩‍💻 Contato

- Informações	
- Nome	Leonardo da Motta Teixeira  
- Cargo	QA Engineer / Gestor / Tester-Sênior  
- LinkedIn	www.linkedin.com/in/leonardo-da-motta-teixeira-3584734b  
- E-mail	lteixei@hotmail.com  

---

## 📝 Licença

- Este projeto está licenciado sob a MIT License.


