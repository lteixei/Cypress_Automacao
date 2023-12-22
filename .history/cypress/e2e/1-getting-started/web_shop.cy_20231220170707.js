/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    //cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('FAZER LOGIN', () =>{

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
//
//################################################################

  })
})
      
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    //cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('ESCOLHER PRODUTOS', () =>{

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
//



//CRIANDO SCRIPT PARA LIMPAR CARRINHO DE COMPRA

//cy.get('.ico-cart > .cart-label').click()
//cy.get('.cart-header-row > :nth-child(1)').click()
  //.should('Shopping cart')










//
//
//ESCOLHER_ROUPAS
cy.get('.top-menu > :nth-child(4) > a').click()
cy.contains('Apparel & Shoes').should('be.visible')
//
//
//BOLSA / MOCHILA
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-29').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//BERMUDA JEANS
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//BLUSA BRANCA
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//CINTO DE CALÇA
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-40').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//TENIS
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-28').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
///VESTIDO
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-5').click()
cy.get('.top-menu > :nth-child(4) > a').click()
cy.get('.ico-cart > .cart-label').click()
//
//SELECIONAR TODOS OS PRODUTOS
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
//

//################################################################

  })
})
 