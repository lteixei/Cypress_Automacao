/// <reference types="cypress" />
describe('Ongs', () => {
  beforeEach(() => {
    cy.visit('https://apptimvendasdev.internal.timbrasil.com.br/32_0_0_28_UAT1/#/login')
    cy.screenshot()
  })
    
    //cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
        
  it('Novo_Usuario', () =>{
     //
    cy.get('//label[@id=login-input1]/input[1]')
    //.should('be.visible')
    .type('T3313299')
    //
    cy.get('//input[@name=password]')
    .should('be.visible')
    .type('Tim@12345')
    //
    cy.get('btn-login')
    .should('be.visible')
    .click()



  //it('Login no SIEBEL', () =>{
    //
    //cy.get('#USER')
      //.should('be.visible')
      //.type('RAFAA1');
    //
    //cy.get('#PASSWORD')
    //.should('be.visible')
    //.type('Tim@12345');
    //
    //cy.get('#btnSubmit')
    //.should('be.visible')
    //.click();
  
    //PESQUISAR CPF - VER SE DÁ PARA COLOCAR UM IT 
    //cy.get('.siebui-crumb').should('be.visible')
    //cy.click('#j_s_sctrl_tabScreen')
    //cy.select('#ui-id-116')
    //cy.get('#ui-id-116').click()
    
  })

})