/// <reference types="cypress iframe" />
describe('APP', () => {
  before(() => {
    cy.visit('https://www.globo.com/')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('of undefined')
        done()
        return false
      });

//FRAME É ASSIM QUE SE USA    
    //cy.iframe('aut-iframe').find('//label[@id='login-input1']/input[1]').type('T3313299');
    //
    
  })
})
      