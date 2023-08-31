/// <reference types="cypress iframe" />
describe('Livraria da Travessa', () => {
  before(() => {
    cy.visit('https://www.travessa.com.br/')
    cy.screenshot()
  })

  it('Novo Usuário', () =>{
    //
    cy.get('#txtBusca').type('Contos Eróticos')
    cy.get('.busca-bar').click();
    cy.get('#gridBusca_ctl00_a_btnComprar').click();
    cy.get('#dgCarrinho_ctl02_lnkObjDesejo').click();
    cy.get('#dgCarrinho_ctl02_chkPresente').click();
  //
    cy.get('#txtEmail2').type('lteixei@gmail.com')
    cy.get('#txtSenha').type('leolmt0406')
    cy.get('btnLogar').click();
    //cy.get('#iframe-id')
  //.iframe('body #elementToFind')
  //.should('exist')
  })
})
      //cy.contains('LIVRARIA DA TRAVESSA').should('be.visible')
      //cy.get('h4').contains('Detalhes da Busca')
      //cy.get('h1').contains('Minha página inicial')
      //    
  