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
//cy.get(':nth-child(4) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get(':nth-child(7) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-29').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//CALÇA JEANS
cy.get(':nth-child(5) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//CINTO DE CALÇA
cy.get(':nth-child(4) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//
//CALÇA JEANS
cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-36').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
//TENIS
cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
//cy.contains('Add to cart').should('be.visible')
cy.get('#add-to-cart-button-28').click()
//cy.get('#add-to-cart-button-5').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
///VESTIDO
cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
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
      /// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    //cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('EFETUAR PAGAMENTO', () =>{

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
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()
cy.get('.update-cart-button').click()
//
//
//ESCOLHER_ROUPAS
cy.get('.top-menu > :nth-child(4) > a').click()
cy.contains('Apparel & Shoes').should('be.visible')
//
//
//BOLSA / MOCHILA
//cy.get(':nth-child(4) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get(':nth-child(7) > .product-item > .picture > a > img').click()
cy.get('#add-to-cart-button-29').click()
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
cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
//cy.contains('Add to cart').should('be.visible')
cy.get('#add-to-cart-button-28').click()
//cy.get('#add-to-cart-button-5').click()
cy.contains('Apparel & Shoes').should('be.visible')
cy.get('.top-menu > :nth-child(4) > a').click()
//
///VESTIDO
cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
cy.get('#add-to-cart-button-5').click()
cy.get('.top-menu > :nth-child(4) > a').click()
cy.get('.ico-cart > .cart-label').click()
//
//SELECIONAR TODOS OS PRODUTOS
cy.get(':nth-child(1) > .remove-from-cart > input').click()
cy.get(':nth-child(2) > .remove-from-cart > input').click()
cy.get(':nth-child(3) > .remove-from-cart > input').click()
cy.get(':nth-child(4) > .remove-from-cart > input').click()


//COMPRANDO O VESTIDO
cy.get('#termsofservice').click() // Termo - I Agree
cy.get('#checkout').click() // Checkout

//BOTÃO CONTINUAR
cy.get('#billing-buttons-container > .button-1').click()
cy.get('#shipping-buttons-container > .button-1').click()
cy.get('#shipping-method-buttons-container > .button-1').click()


//
//Payment method
cy.contains('Payment method').should('be.visible')
cy.get('#paymentmethod_2').click()
cy.get('#payment-method-buttons-container > .button-1').click()


//
//Payment information
cy.get('#CardholderName').type('josé filho')
cy.get('#CardNumber').type('5524 7448 0672 9496')
cy.get('#ExpireMonth').type('04')
cy.get('#ExpireYear').type('2024')
cy.get('#payment-info-buttons-container > .button-1').click()
//
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
cy.contains('Wrong card code').should('be.visible')    
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
        it('LIMPAR CARRINHO DE COMPRAS', () =>{
      
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
      //LIMPAR CARRINHO PARA COMPRA
      cy.get('.ico-cart > .cart-label').click()
      cy.get(':nth-child(1) > .remove-from-cart > input').click()
      cy.get(':nth-child(2) > .remove-from-cart > input').click()
      cy.get(':nth-child(3) > .remove-from-cart > input').click()
      cy.get(':nth-child(4) > .remove-from-cart > input').click()
      cy.get('.update-cart-button').click()
      //
      //
      //################################################################
                
        })
      })