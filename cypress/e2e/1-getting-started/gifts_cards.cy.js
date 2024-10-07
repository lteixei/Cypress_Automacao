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
// 1 PRESENTE - GIFTS
cy.get('.top-menu > :nth-child(7) > a').click()
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
//RECIPIENTE NAME
cy.get('#giftcard_1_RecipientName').type('Andre')
//RECIPIENTE EMAIL
cy.get('#giftcard_1_RecipientEmail').type('andre@hotmail.com')
//cy.get('#giftcard_1_SenderName').type('Leonaardo')

//cy.get('#giftcard_1_SenderEmail').type('leo@leo.com.br')
//MESSAGE
cy.get('#giftcard_1_Message').type('Oi')
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-1').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
//
// 2 PRESENTE - GIFTS
cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
//RECIPIENTE NAME
cy.get('#giftcard_2_RecipientName').type('Andre')
//RECIPIENTE EMAIL
cy.get('#giftcard_2_RecipientEmail').type('andre@hotmail.com')

//MESSAGE
cy.get('#giftcard_2_Message').type('Oi')
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
//
// 3 PRESENTE - GIFTS
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
//RECIPIENTE NAME
cy.get('#giftcard_3_RecipientName').type('Andre')
cy.wait(2000) // wait for 2 seconds
//MESSAGE
cy.get('#giftcard_3_Message').type('Oi')
cy.wait(3000) // wait for 3 seconds
cy.get('#add-to-cart-button-3').click()
cy.wait(5000) // wait for 5 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
//
//
//
// 4 PRESENTE
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
//RECIPIENTE NAME
cy.get('#giftcard_4_RecipientName').type('Andre')
//MESSAGE
cy.get('#giftcard_4_Message').type('Oi')
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-4').click()
cy.wait(2000) // wait for 2 seconds
//
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()//
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
// VERIFICAR MENSAGEM DE CARRINHO VAZIO
cy.contains('Your Shopping Cart is empty!').should('be.visible')
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
//cy.get('.clear-list').click()
//cy.contains('You have no items to compare.').should('be.visible')
//
//
//HOME
cy.get('.header-logo > a > img').click()
//
  })
})


