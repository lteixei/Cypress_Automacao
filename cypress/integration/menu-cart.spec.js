/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Menu - Cart', () => {

    before(() => {
        cy.visit('https://automationexercise.com/view_cart', { timeout: 120000 });
        cy.allure().feature('Menu - Cart');
    });

    it('Deve acessar a página do Carrinho', () => {
        cy.get('a[href="/view_cart"]').should('be.visible').click({ force: true });
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('exist');
        cy.screenshot('menu-cart');
    });
});
