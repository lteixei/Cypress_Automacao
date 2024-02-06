/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN582/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
    cy.get(':nth-child(1) > .link').click()
    cy.get('.field').type('11997953833')
    cy.get('.row__buttons > .btn').click()
    cy.wait(20000) // wait for 20 seconds
    //cy.get('#password').type('Tim@12345')
    //cy.get('#signOnButton').click()
    //
    //QUAL O SEU E-MAIL
    cy.get('#email').type('lteixeira@')
    //cy.get('#Password').type('123456')
    //cy.get('#RememberMe').click()
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />