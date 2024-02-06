/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN582/trifurcacao2BHome%2BPage%2BVendas%2BView%26SWERF%3D1%26SWEHo%3D%26SWEBU%3D1%26SWEApplet0%3DTIM%2BVendas%2B21%2B-%2BGFA%2BSenha%2BForm%2BBlank%2BApplet%26SWERowId0%3DVRId-0&vnd_pi_application_name=SIEBELPOS+FQA-Internal+%7C+SIEBELPOSFQA')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
    cy.get('#username').type('T3000412')
    cy.get('#password').type('Tim@12345')
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