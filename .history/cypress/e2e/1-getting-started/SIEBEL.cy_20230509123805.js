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
//cy.get('.ico-register').click()
//
//cy.get('#gender-male').click()
//cy.get('#FirstName').type('LEONARDO')
//cy.get('#LastName').type('TEIXEIRA')
//cy.get('#Email').type('LLTEI@GMAIL.COM')
//
//cy.get('#Password').type('123456')
//cy.get('#ConfirmPassword').type('123456')
//
//cy.get('#register-button').click()
//cy.contains('Your registration completed').should('be.visible')

//LOGIN 
cy.get('.ico-login').click()
//
cy.get('#Email').type('LLTEI@GMAIL.COM')
cy.get('#Password').type('123456')
cy.get('#RememberMe').click()
//
cy.get('form > .buttons > .button-1').click()
cy.contains('LLTEI@GMAIL.COM').should('be.visible')
//

//ESCOLHER ROUPAS - BLUE JEANS
cy.get('.top-menu > :nth-child(4) > a').click()
cy.contains('Apparel & Shoes').should('be.visible')
//
cy.get(':nth-child(3) > .product-item > .picture > a > img')
cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-40')
cy.get('#topcartlink > .ico-cart')
cy.get(':nth-child(1) > .remove-from-cart > input')
cy.get(':nth-child(2) > .remove-from-cart > input')
cy.get(':nth-child(3) > .remove-from-cart > input')

//CHECKOUT - COMPRAS
//cy.get('.ico-cart > .cart-label')
//cy.get('.remove-from-cart > input')
//
//CARTÃO DE CRÉDITO - INSERIR DADOS
//cy.get('.discount-coupon-code').type('Leonardo')
//cy.get('#CountryId').type('Brazil')
//cy.get('#termsofservice').click()
//cy.get('#checkout').click()

    
    //
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    
  })
})
      