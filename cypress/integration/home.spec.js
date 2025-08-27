/// <reference types="Cypress" />
import '@shelex/cypress-allure-plugin';

describe('Página Inicial - Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('/', { timeout: 120000 });
        cy.allure().feature('Página Inicial');
    });

    it('Deve carregar a página inicial corretamente', () => {
        cy.allure().label('tag', 'home-page');
        cy.title().should('eq', 'Automation Exercise');
        cy.get('.logo img', { timeout: 20000 }).should('be.visible');

        cy.screenshot('home-page');
        cy.allure().step('Página inicial carregada com sucesso');
    });

});
