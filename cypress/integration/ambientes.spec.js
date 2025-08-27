// <reference types="cypress" />

describe('Livraria da Travessa', () => {
    before(() => {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.screenshot();
    });

    it('Novo Usuário', () => {
        // Aqui você pode adicionar o fluxo de cadastro ou login
        cy.log('Teste de novo usuário funcionando.');
    });
});
