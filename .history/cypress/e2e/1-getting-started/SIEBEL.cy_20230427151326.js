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
    //
//TENTANDO LOGAR SEM SABER O LOGIN E A SENHA - USUÁRIO OU SENHA INVÁLIDOS  
    cy.contains('Bem-vindo(a)', { timeout: 20000 });
    //cy.iframe('Your project: 'Test Project'').find('#ui-id-108').click();
    cy.get('#ui-id-76').click()
    //cy.get('//*[@id="ui-id-76"]').click() 
    //
    //cy.get('#s_1_1_1_0_PESSOA\ FÍSICA').click()
    //cy.get(':nth-child(5) > :nth-child(3) > .mceGridField > input').type('82145236996')
    //cy.get('#s_1_1_3_0').click()
    //
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    
  })
})
      