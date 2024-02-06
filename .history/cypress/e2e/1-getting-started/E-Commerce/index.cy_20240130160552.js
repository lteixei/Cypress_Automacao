/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN582/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
    //cy.get('#username').type('T3000412')
    //cy.get('#password').type('Tim@12345')
    cy.get('#signOnButton').click()
    //
    //cy.get('#Email').type('LLTEI@GMAIL.COM')
    //cy.get('#Password').type('123456')
    //cy.get('#RememberMe').click()
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />