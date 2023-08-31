/// <reference types="cypress" />
describe('Livraria da Travessa', () => {
  before(() => {
    cy.visit('http://www.travessa.com.br/')
    cy.screenshot()
    cy.get('#txtBusca')
    .type('Contos Eróticos')
    cy.get('.busca-bar')
    .click()
    cy.get('a.icon:nth-child(13)').click();
  }
      //cy.contains('LIVRARIA DA TRAVESSA').should('be.visible')
      //cy.get('h4').contains('Detalhes da Busca')
      //cy.get('h1').contains('Minha página inicial')
      //    
  })