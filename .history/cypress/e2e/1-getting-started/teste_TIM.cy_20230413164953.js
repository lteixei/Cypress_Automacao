/// <reference types="cypress" />
describe('APP TIM', () => {
  before(() => {
    
    cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    
    })

  it('Login no SIEBEL', () =>{
    //
    cy.get('#USER')
      //.should('be.visible')
      .type('RAFAA1');
    //
    cy.get('#PASSWORD')
    //.should('be.visible')
    .type('Tim@12345');
    //
    cy.get('#btnSubmit')
    //.should('be.visible')
    .click();
  
    //PESQUISAR CPF - VER SE DÁ PARA COLOCAR UM IT 
   cy.should('be.visible')
   cy.get('#ui-id-84').click();
   //cy.get('#j_s_sctrl_tabScreen')
   
   //.click();
    
   
  });

})