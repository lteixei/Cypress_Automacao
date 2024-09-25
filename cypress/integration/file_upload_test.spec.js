// cypress/integration/globo_test.spec.js

describe('Teste Simples no Site da Globo', () => {
    it('Deve acessar o site www.globo.com', () => {
        // Visita a URL da Globo
        cy.visit('https://www.globo.com');

        // Verifica se o título da página contém "Globo"
        cy.title().should('include', 'Globo');

        // Verifica se o elemento principal está visível
        cy.get('header').should('be.visible');
    });
});

       
// cypress/integration/file_upload_test.spec.js

// Descreve o conjunto de testes
//describe('CY0019 File Upload Test', () => {
    // Executa antes de todos os testes
    // before(() => {
        // Abre a URL do aplicativo
        //cy.visit('https://demo.automationtesting.in'); // Substitua pela URL do seu app
   // });
    /*
    // Define um teste específico
    it('Deve realizar o upload do arquivo 90.jpg', () => {
        // Acessa a tela inicial
        cy.get('img[alt="Automation Demo Site"]').click(); // Ajuste conforme necessário
        cy.get('a[href="#upload"]').click(); // Seletor para a seção de upload

        // Define o caminho do arquivo que deve estar na pasta cypress/fixtures
        const filePath = '90.jpg'; // O arquivo deve estar na pasta cypress/fixtures

        // Seleciona o input de arquivo e faz o upload
        cy.get('input[type="file"]').attachFile(filePath); // Seletor para input file

        // Adicione uma asserção para verificar se o upload foi bem-sucedido
        // Isso pode variar dependendo do comportamento do seu app
        cy.get('.uploaded-file-name').should('contain', '90.jpg'); // Ajuste conforme necessário
    });
});
