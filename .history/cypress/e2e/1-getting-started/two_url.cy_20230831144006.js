/// <reference types="cypress" />
describe('Livraria da Travessa', () => {
  before(() => {
    cy.visit('https://www.travessa.com.br/')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
//BUSCA NO SITE     
    cy.get('#txtBusca').type('Contos Eróticos')
    cy.get('.busca-bar').click();
    cy.visit('globo.com/')
    //
})    
})