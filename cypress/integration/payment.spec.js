//       
describe('DEMO WEB SHOP', () => {
  before(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.screenshot()
  })
  it('PAGAMENTO DA JÓIA', () =>{
  //
  //JEWELRY - JÓIAS
cy.get('.top-menu > :nth-child(6) > a').click()
//
//
cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-71').click()
cy.wait(3000) // wait for 3 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
cy.wait(2000) // wait for 2 seconds
//
//
cy.get(':nth-child(2) > .product-item > .picture').click()
cy.wait(2000) // wait for 2 seconds
cy.get('#add-to-cart-button-14').click()
cy.wait(3000) // wait for 3 seconds
cy.get(':nth-child(2) > [itemscope=""] > a > span').click()
cy.wait(2000) // wait for 2 seconds
//
//
cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(6) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//
cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(6) > a').click()
cy.wait(2000) // wait for 2 seconds
//
//
cy.get(':nth-child(5) > .product-item > .picture > a > img').click()
cy.get('.compare-products > .button-2').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.top-menu > :nth-child(6) > a').click()
//
cy.get('.header-logo > a > img').click()
//
cy.get('.ico-cart > .cart-label').click()

//
cy.get('.remove-from-cart > input').click()
//
//TERMO DE ACEITE
cy.get('#termsofservice').click() // Termo - I Agree
cy.get('#checkout').click() // Checkout
cy.get('#Email').type('LLTEI@GMAIL.COM')
cy.get('#Password').type('123456')
cy.get('#RememberMe').click()
cy.get('form > .buttons > .button-1').click()
//
cy.get('#termsofservice').click() // Termo - I Agree
cy.get('#checkout').click() // Checkout
//
//
//BOTÃO CONTINUAR
cy.get('#billing-buttons-container > .button-1').click()
cy.get('#shipping-buttons-container > .button-1').click()
cy.get('#shippingoption_2').click()
cy.get('#shipping-method-buttons-container > .button-1').click()
cy.get('#paymentmethod_2').click()
//
//
//Payment method
cy.contains('Payment method').should('be.visible')
cy.get('#paymentmethod_2').click()
cy.get('#payment-method-buttons-container > .button-1').click()
//
//
//Payment information
cy.get('#CardholderName').type('José Filho')
cy.get('#CardNumber').type('5405 1985 7437 5731')
cy.get('#ExpireMonth').type('04')
cy.get('#ExpireYear').type('2025')
cy.get('#payment-info-buttons-container > .button-1').click()
//
//VERIFICANDO SE APARECE ERRO NO CARTÃO
cy.contains('Wrong card code').should('be.visible')    
//
//LIMPAR CARRINHO PARA COMPRA
cy.get('.ico-cart > .cart-label').click()
cy.get(':nth-child(1) > .remove-from-cart > input').click()
//
//VISUALIZAR LISTA DE TODOS OS PRODUTOS EM FALTA
cy.get('.customer-service > ul > :nth-child(5) > a').click()
//
//LIMPAR LISTA DOS PRODUTOS EM FALTA
cy.get('.clear-list').click()
//
})
}) 