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
//VESTIDO
cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2')
//
//TENIS
cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2')
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2')
//
cy.get('#topcartlink > .ico-cart').click()
//cy.get(':nth-child(1) > .remove-from-cart > input')
//cy.get(':nth-child(2) > .remove-from-cart > input')
//cy.get(':nth-child(3) > .remove-from-cart > input')

//CHECKOUT - COMPRAS
cy.get('#termsofservice').click()
cy.get('#checkout').click()
//
//Billing address
cy.contains('Billing address').should('be.visible')
cy.get('#billing-buttons-container > .button-1').click()
//
//Shipping address
cy.contains('Shipping address').should('be.visible')
cy.get('#shipping-buttons-container > .button-1').click()
//
//Shipping method
cy.contains('Shipping method').should('be.visible')
cy.get('#shippingoption_0').click()
cy.frameLoaded('#Your project: "Test Project"').click('#shipping-buttons-container > .button-1')

//
//Payment method
//cy.contains('Payment method').should('be.visible')
//cy.get('#paymentmethod_2').click()
//cy.get('#shipping-buttons-container > .button-1').click()
//
//Payment information
//cy.get('#CardholderName').type('josé filho')
//cy.get('#CardNumber').type('5524 7448 0672 9496')
//cy.get('#ExpireMonth').type('04')
//cy.get('#ExpireYear').type('2024')
//cy.get('#payment-info-buttons-container > .button-1').click()
    //
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    
  })
})
      