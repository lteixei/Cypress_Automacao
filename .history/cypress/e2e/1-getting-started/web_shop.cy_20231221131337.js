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
cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click()
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
cy.get(':nth-child(12) > .product-item > .picture > a > img').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child() > .option-list > :nth-child(1)').click()
cy.get('#product_attribute_72_6_19_91').click()
cy.get('#product_attribute_72_3_20_58').click()
cy.get('#product_attribute_72_8_30_94').click()
cy.get('#add-to-cart-button-72').click()
cy.wait(2000) // wait for 2 seconds
cy.get(':nth-child(3) > [itemscope=""] > a > span').click()
//
  })
})
//
//

