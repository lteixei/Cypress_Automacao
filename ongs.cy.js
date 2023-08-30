/// <reference types="cypress" />
describe('Ongs', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/cadastro')
      cy.screenshot()
    })
  
    it('Seu Barriga - Novo Usuário', () =>{
      //
      cy.get('#nome')
      .should('be.visible')
      .type('Leonardo');
      //
      cy.get('#email')
      .should('be.visible')
      .type('lmt1123@gmail.com');
      //
      cy.get('#senha')
      .should('be.visible')
      .type('lmt0406');
      //
      cy.get('.btn')
      .should('be.visible')
      .click();
      
    });
  
    it('Seu Barriga - Login', () =>{
      cy.get('.nav > :nth-child(1) > a')
      .should('be.visible')
      .click();
      //
      cy.get('#email')
      .should('be.visible')
      .type('lmt1123@gmail.com');
      //
      cy.get('#senha')
      .should('be.visible')
      .type('lmt0406');
      //
      cy.get('.btn')
      .should('be.visible')
      .click();
      //
      // CONFIRMAR O QUE ESTÁ ESCRITO
      cy.contains('Bem vindo, Leonardo!')
      .should('be.visible') 

     });

})
  