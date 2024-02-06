/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN580/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
        //cy.get('/html/body/div[2]/div[2]/a[1]').click();
        cy.get('.cc-allow').click();
        cy.get(':nth-child(1) > .link').click();
        //cy.get('//*[@id=\"dashboardId\"]/div[4]/div/div/div[3]/div[1]/a').click();
        //
        // ######## PEGAR O MSYSDN PRÉ ########
        //cy.get('#gender-male').click()
        //cy.get('#FirstName').type('LEONARDO')
        //
        cy.get('.field').type('15981110026');
        cy.get('.row__buttons > .btn').click();
        cy.wait(20000) // wait for 2 seconds
        //
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(25000) // wait for 2 seconds
        //
        cy.get(':nth-child(1) > .field').type('Leonardo da Motta Teixeira');
        cy.get(':nth-child(2) > .field').type('Guiomar da Motta Teixeira');
        cy.get(':nth-child(3) > .field').type('12101976');
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(10000) // wait for 2 seconds
        //
        //limpar campo
        cy.get('#email').type('')
        .should('have.value', 'manuelamoreira@gmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#email').type('lteixeira@gmail.com')
        //
        //cy.get('#email').clear().type('lteixeira@hotmail.com');
        cy.get('.box__voltar__mobile > .btn').click();
        //
        cy.wait(5000) // wait for 2 seconds
        cy.get('#dadoInput').type("03178030");
        cy.get('.box__voltar__mobile > .btn').click();
        //
        cy.get('#numeroInput').type("321");
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(20000) // wait for 2 seconds
        ////
        cy.get(':nth-child(2) > :nth-child(1) > .btn__payment').click();
        cy.get('.opcao__semPermanencia').click();
        ////
        cy.wait(3000) // wait for 2 seconds
        cy.get('.opcao__email').click();
        cy.get('.email__dialog > .main__dialog > .buttons > .btn__primary').click();
        //
        //DATA
        cy.wait(2000) // wait for 2 seconds
        cy.get('#date7 > .row__dia > .radio__label > .checkmark').click();
        //BOTAO
        cy.wait(2000) // wait for 2 seconds
        cy.get('.box__voltar__mobile > .btn').click();
        //NÃO QUERO ATIVAR
        cy.wait(2000) // wait for 2 seconds
        cy.get('.row__buttons > .btn__outline__primary').click();
        cy.wait(3000) // wait for 2 seconds

        // ######## TERMOS E CONDIÇÕES ########
        cy.wait(2000) // wait for 2 seconds
        cy.get(':nth-child(2) > .label__checkbox').click();
        cy.get(':nth-child(4) > .label__checkbox').click();
        cy.get('.content__termos > .btn').click();
        
        //
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />