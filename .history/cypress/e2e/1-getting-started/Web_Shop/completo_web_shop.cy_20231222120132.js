/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
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
})
})
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('BOOKS_WEB', () =>{
//
//
//BOOKS
cy.get('.top-menu > :nth-child(1)').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-13').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(1) > a').click()
//
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-45').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(1) > a').click()
//
//
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-22').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(1) > a').click()
//
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(1) > a')
//
//
cy.get('.ico-cart > .cart-label').click()
//
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
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
//
//
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('COMPUTERS_WEB', () =>{
//
//
//COMUTERS
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//
//NOTEBOOK
//
//
cy.get('.top-menu > :nth-child(2)').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > .sub-category-item > .picture').click()
cy.get('.product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-31').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
//DESKTOP
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
//
//
//DESK - 1
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > .option-list > :nth-child(1)').click()
cy.get('#product_attribute_72_6_19_91').click()
cy.get('#product_attribute_72_3_20_58').click()
cy.get('#product_attribute_72_8_30_94').click()
cy.get('#add-to-cart-button-72').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 2
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#product_attribute_16_3_6_18').click()
cy.get('#product_attribute_16_4_7_21').click()
cy.get('#product_attribute_16_8_8_24').click()
cy.get('#add-to-cart-button-16').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 3
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-74').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//DESK - 4
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//DESK - 5
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
//
//DESK - 6
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-75').click()
//cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
cy.get('.ico-cart > .cart-label').click()
//
//ACESSORIOS
cy.get('.top-menu > :nth-child(2)').click()
//
//ACESS - 1
cy.get(':nth-child(3) > .sub-category-item > .picture').click()
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
//
//ACESS - 2
cy.get('#add-to-cart-button-63').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 3
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-66').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 4
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-65').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 5
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-62').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 6
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-64').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 7
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-61').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
//ACESS - 8
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-67').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get(':nth-child(5) > .remove-from-cart > input').click()
cy.get(':nth-child(6) > .remove-from-cart > input').click()
cy.get(':nth-child(7) > .remove-from-cart > input').click()
cy.get(':nth-child(8) > .remove-from-cart > input').click()
cy.get(':nth-child(9) > .remove-from-cart > input').click()
cy.get(':nth-child(10) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click();
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
cy.get('.clear-list').click();
//
//HOME
cy.get('img').click()
//
  })
})
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('ELETRONICS_WEB', () =>{
//
//
//
//ELETRONICS - CAMERAS E FOTOS
//
//
cy.get('.top-menu > :nth-child(3)').click()
//
cy.get(':nth-child(1) > .sub-category-item').click()
//
cy.get(':nth-child(1) > .product-item > .picture').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
//
cy.get(':nth-child(2) > .product-item > .picture').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
//
//
cy.get(':nth-child(3) > .product-item > .picture').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
//
//
cy.get(':nth-child(4) > .product-item > .picture').click()
cy.get('.compare-products > .button-2').click()
//
cy.get('.customer-service > ul > :nth-child(5)').click()
//
//
//ELETRONICS - CAMERAS E FOTOS
//
cy.get('.top-menu > :nth-child(3)').click()
//
cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-43').click()
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click()
cy.get(':nth-child(2) > .sub-category-item > .picture').click()
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('[href="https://demowebshop.tricentis.com/content/images/thumbs/0000213_phone-cover.png"] > img').click()
cy.get('.mfp-close').click()
cy.get('#add-to-cart-button-80').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
//cy.get(':nth-child(3) > .remove-from-cart > input').click()
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
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('APPAREL_&_SHOES_WEB', () =>{
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
//TENIS VERDE
cy.get(':nth-child(8) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BOLSA / MOCHILA
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-29').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BERMUDA JEANS
cy.get(':nth-child(6) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//BLUSA BRANCA
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//CINTO DE CALÇA
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-40').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//TENIS
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.selected-value > label > .color-container > .color').click()
cy.get('#add-to-cart-button-28').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
cy.wait(2000) // wait for 2 seconds
//
///VESTIDO
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-5').click()
cy.get('.top-menu > :nth-child(4) > a').click()
cy.get('.ico-cart > .cart-label').click()
cy.wait(2000) // wait for 2 seconds
//
//
//SELECIONAR TODOS OS PRODUTOS
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get(':nth-child(5) > .remove-from-cart > input').click()
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
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.screenshot()
  })
  it('DIGITAL_DOWNLOADS_WEB', () =>{
//
//
//COMPUTERS
cy.get('.top-menu > :nth-child(5)').click()
//
cy.get(':nth-child(1) > .product-item > .picture').click()
cy.get('#add-to-cart-button-53').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(2) > .product-item > .picture').click()
cy.get('#add-to-cart-button-51').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(3) > .product-item > .picture').click()
cy.get('#add-to-cart-button-52').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
//cy.get('.clear-list').click()
//
//HOME
cy.get('.header-logo > a > img').click()
//
  })
})
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('JEWELRY_WEB', () =>{
//
//
//JEWELRY - JÓIAS
cy.get('.top-menu > :nth-child(6) > a').click()
//
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-71').click()
cy.wait(3000) // wait for 3 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(2) > .product-item > .picture').click()
cy.get('#add-to-cart-button-14').click()
cy.wait(3000) // wait for 3 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
cy.wait(2000) // wait for 2 seconds
//cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
cy.wait(2000) // wait for 2 seconds
//cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.get('.top-menu > :nth-child(6) > a').click()
//cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get('.header-logo > a > img').click()
//
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()

cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
cy.get('.clear-list').click()
//
//
//HOME
cy.get('.header-logo > a > img').click()
//
  })
})
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
  })
  it('GIFTS_WEB', () =>{
//
//
//
//COMUTERS
cy.get('.top-menu > :nth-child(7) > a').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#giftcard_1_RecipientName').type('Andre')
cy.get('#giftcard_1_RecipientEmail').type('andre@hotmail.com')
cy.get('#add-to-cart-button-1').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#giftcard_2_RecipientName').type('Andre')
cy.get('#giftcard_2_RecipientEmail').type('andre@hotmail.com')
cy.get('#add-to-cart-button-2').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#giftcard_3_RecipientName').type('Leonardo')
cy.get('#add-to-cart-button-3').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('#giftcard_4_RecipientName').type('Leonardo')
cy.get('#add-to-cart-button-4').click()
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
//cy.get('.clear-list').click()
//
//
//HOME
cy.get('.header-logo > a > img').click()
//
  })
})