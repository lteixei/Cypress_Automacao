/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://odia.ig.com.br/')
    cy.screenshot()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
    it('fails to visit website 1', function () {
      cy.visit('https://harper-morpho-luna.myshopify.com')
    })
  })
  it('Novo Usuário', () =>{
    //
    cy.get('.menuDesktop > .header-titles > :nth-child(4) > .header-title')
  });

//FRAME É ASSIM QUE SE USA    
    //cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
    //
    
  })

      