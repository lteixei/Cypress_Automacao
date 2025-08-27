/// <reference types="Cypress" />
import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

describe('Menu - Home', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com', { timeout: 120000 });
  });

  it('Deve acessar a Home', () => {
    cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a') // Corrigido: usando cy.xpath
      .should('be.visible')
      .click();
    
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.screenshot('menu-home');
  });
});
