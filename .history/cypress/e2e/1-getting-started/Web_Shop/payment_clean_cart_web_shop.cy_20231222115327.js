//       
/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.screenshot()
    })
    it('PAGAMENTO DOS PRODUTOS', () =>{
    //
    //SELECIONAR TODOS OS PRODUTOS
    cy.get(':nth-child(1) > .remove-from-cart > input').click()
    cy.get(':nth-child(2) > .remove-from-cart > input').click()
    cy.get(':nth-child(3) > .remove-from-cart > input').click()
    cy.get(':nth-child(4) > .remove-from-cart > input').click()
    cy.get(':nth-child(5) > .remove-from-cart > input').click()
    //
    //
    //COMPRANDO O VESTIDO
    cy.get('#termsofservice').click() // Termo - I Agree
    cy.get('#checkout').click() // Checkout
    //
    //
    //BOTÃO CONTINUAR
    cy.get('#billing-buttons-container > .button-1').click()
    cy.get('#shipping-buttons-container > .button-1').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
    //
    //
    //Payment method
    cy.contains('Payment method').should('be.visible')
    cy.get('#paymentmethod_2').click()
    cy.get('#payment-method-buttons-container > .button-1').click()
    //
    //
    //Payment information
    cy.get('#CardholderName').type('josé filho')
    cy.get('#CardNumber').type('5524 7448 0672 9496')
    cy.get('#ExpireMonth').type('04')
    cy.get('#ExpireYear').type('2024')
    cy.get('#payment-info-buttons-container > .button-1').click()
    //
    //VERIFICANDO DE APARECE ERRO NO CARTÃO
    cy.contains('Wrong card code').should('be.visible')    
    //
      })
    })
    //
    //
    //################################################################
    //################################################################
    //
    /// <reference types="cypress" />
    describe('DEMO WEB SHOP', () => {
      before(() => {
        cy.visit('https://demowebshop.tricentis.com/')
        cy.screenshot()
      })
        it('LIMPAR CARRINHO DE COMPRAS', () =>{
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
    //cy.get('.clear-list').click()
    //
     })
    }) 
    
    
    
    
    
    