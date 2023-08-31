/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://apptimvendasdev.internal.timbrasil.com.br/33_0_1_02_UAT1/')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
    

//FRAME É ASSIM QUE SE USA    
    //cy.iframe('aut-iframe').find('#lnkComprar').click();
    //
    
  })
})
      