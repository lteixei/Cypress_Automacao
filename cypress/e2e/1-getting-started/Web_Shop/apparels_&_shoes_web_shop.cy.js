//################################################################
//      
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.screenshot()
  })
  it('ADICIONAR APPAREL & SHOES NO CARRINHO E NA LISTA', () =>{
//
//
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
//TENIS VERDE
cy.get(':nth-child(8) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BOLSA / MOCHILA
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-29').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BERMUDA JEANS
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BLUSA BRANCA
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//CINTO DE CALÇA
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-40').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-36').click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//TENIS
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#product_attribute_28_7_10').click()
cy.get('.selected-value > label > .color-container > .color').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-28').click().click()
cy.wait(2000) // wait for 2 seconds
cy.contains('Apparel & Shoes').should('be.visible')
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
///VESTIDO
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-5').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.ico-cart > .cart-label').click()
cy.wait(2000) // wait for 2 seconds
//
//
//SELECIONAR TODOS OS PRODUTOS
//cy.get(':nth-child(1) > .remove-from-cart > input').click()
//cy.get(':nth-child(2) > .remove-from-cart > input').click()
//cy.get(':nth-child(3) > .remove-from-cart > input').click()
//cy.get(':nth-child(4) > .remove-from-cart > input').click()
//cy.get(':nth-child(5) > .remove-from-cart > input').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get(':nth-child(5) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
cy.get('.clear-list').click()
//
//HOME
cy.get('.header-logo > a > img').click()
//
  })
})