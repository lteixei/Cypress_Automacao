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
//COMUTERS
cy.get('.top-menu > :nth-child(7) > a').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.get('#giftcard_1_RecipientName').type('Andre')
cy.get('#giftcard_1_RecipientEmail').type('andre@hotmail.com')
cy.get('#add-to-cart-button-1').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()

cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
cy.get('#giftcard_2_RecipientName').type('Andre')
cy.get('#giftcard_2_RecipientEmail').type('andre@hotmail.com')
cy.get('#add-to-cart-button-2').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()

cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.get('#giftcard_3_RecipientName').type('Leonardo')
cy.get('#add-to-cart-button-3').click()
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()

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


