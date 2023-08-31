/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://www.globo.com/')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
    cy.get('.menuDesktop > .header-titles > :nth-child(4) > .header-title')
  });

//FRAME É ASSIM QUE SE USA    
    //cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
    //
    
  })

      