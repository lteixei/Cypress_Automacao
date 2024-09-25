// cypress/integration/file_upload_test.spec.js

describe('CY0019 File Upload Test', () => {
    before(() => {
        // Abrindo o App TIM Vendas
        cy.visit('https://demo.automationtesting.in//Register.html'); // URL do seu app
    });

    it('Deve realizar o upload do arquivo 90.jpg', () => {
        // Acessar a tela inicial
        cy.get('img[alt="Automation Demo Site"]').click(); // Ajuste conforme necessário
        cy.get('a[href="#upload"]').click(); // Seletor para a seção de upload

        // Selecionar o arquivo para upload
        const filePath = '90.jpg'; // O arquivo deve estar na pasta cypress/fixtures
        cy.get('input[type="file"]').attachFile(filePath); // Seletor para input file

        // Adicione uma asserção se necessário
        // cy.get('.uploaded-file-name').should('contain', '90.jpg'); // Ajuste conforme necessário
    });
});
