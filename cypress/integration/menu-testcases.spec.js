/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Menu - Test Cases', () => {

    before(() => {
        cy.visit('https://automationexercise.com/test_cases', { timeout: 120000 });
        cy.allure().feature('Menu - Test Cases');
    });

    it('Deve acessar a página de Test Cases', () => {
        cy.get('a[href="/test_cases"]').should('be.visible').click({ force: true });
        cy.url().should('include', '/test_cases');
        cy.get('h2.title').should('contain.text', 'Test Cases');
        cy.screenshot('menu-test-cases');
    });
});
