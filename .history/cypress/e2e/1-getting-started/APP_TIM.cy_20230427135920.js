/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://apptimvendasdev.internal.timbrasil.com.br/33_0_1_02_UAT1/')
    cy.screenshot()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    it('Novo Usuário', () =>{
      //
  //BUSCA NO SITE     
    cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
    cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
  });
})