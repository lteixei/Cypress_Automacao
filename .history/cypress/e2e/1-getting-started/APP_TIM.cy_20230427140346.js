/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://apptimvendasdev.internal.timbrasil.com.br/33_0_1_02_UAT1/')
    cy.screenshot()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    it('Novo Usuário', () =>{
      cy.contains('Esqueci Minha Senha').should('be.visible')
    //cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
    //cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
  }) })
})