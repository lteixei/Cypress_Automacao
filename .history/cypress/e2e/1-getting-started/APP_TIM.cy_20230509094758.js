/// <reference types="cypress iframe" />
describe('SISTEMA TIM - SIEBEL', () => {
  before(() => {
    cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
//LOGIN 
    cy.get('#USER').type('T3313299')
    cy.get('#PASSWORD').type('Tim@12345')
    cy.get('#btnSubmit').click()

  })
})