/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Menu - Products', () => {

    before(() => {
        cy.visit('https://automationexercise.com/products', { timeout: 120000 });
        cy.allure().feature('Menu - Products');
    });

    it('Deve acessar a página de Products', () => {
        cy.get('a[href="/products"]').should('be.visible').click({ force: true });
        cy.url().should('include', '/products');
        cy.get('.features_items').should('be.visible');
        cy.screenshot('menu-products');
    });
});
