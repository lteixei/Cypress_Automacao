/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Menu - Contact Us', () => {

    before(() => {
        cy.visit('https://automationexercise.com/contact_us', { timeout: 120000 });
        cy.allure().feature('Menu - Contact Us');
    });

    it('Deve acessar a página de Contact Us', () => {
        cy.get('a[href="/contact_us"]').should('be.visible').click({ force: true });
        cy.url().should('include', '/contact_us');
        cy.get('h2.title').should('contain.text', 'Contact Us');
        cy.screenshot('menu-contact-us');
    });
});
