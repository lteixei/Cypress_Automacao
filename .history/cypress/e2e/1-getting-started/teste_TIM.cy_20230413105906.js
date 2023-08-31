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
   //
   cy.should('be.visible')
   cy.get('//*[@id="s_sctrl_tabScreen"]/ul/li[7]')
   ////*[@id="s_sctrl_tabScreen"]/ul/li[7]
   .click();
    //
    cy.get('#ui-id-116')
    .click();
    //
    cy.get('#s_1_1_75_0_Ctrl > span')
    //.should('be.selected')
    .click();
    //
    cy.get('#ui-id-352')
    .type('"PESSOA FÍSICA"');// AQUI EU APERTO O ENTER
    //
    cy.get(':nth-child(5) > [colspan="2"] > .mceGridField > .siebui-ctrl-input')
    .type('21918975094');// AQUI EU APERTO O ENTER
    //
        
   
  });

})