/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    //cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('CADASTRAR - Novo Usuário', () =>{

    //

//MENU NOVO REGISTRO
cy.get('.ico-register').click()
//
cy.get('#gender-male').click()
cy.get('#FirstName').type('LEONARDO')
cy.get('#LastName').type('TEIXEIRA')
cy.get('#Email').type('LLTEI@GMAIL.COM')
//
cy.get('#Password').type('123')
cy.get('#ConfirmPassword').type('123')
//
cy.get('#register-button').click()

//LOGIN 
    //cy.get('#USER').type('T3313299')
    //cy.get('#PASSWORD').type('Tim@12345')
    //cy.get('#btnSubmit').click()
    //
//TENTANDO LOGAR SEM SABER O LOGIN E A SENHA - USUÁRIO OU SENHA INVÁLIDOS  
    
    //
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    
  })
})
      