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
        //
        cy.get('#email').click()
        cy.get('.box__voltar__mobile > .btn').type("lteixeira@hotmail.com");
        cy.get('.box__voltar__mobile > .btn').click();
        //
        //
        cy.get('#dadoInput').type("03178030");
        cy.get('.box__voltar__mobile > .btn').click();
        //
        cy.get('#numeroInput').type("321");
        cy.get('.box__voltar__mobile > .btn').click();
        ////
        cy.get(':nth-child(2) > :nth-child(1) > .btn__payment').click();
        cy.get('.opcao__permanencia').click();
        ////
        cy.get('.opcao__email').click();
        cy.get('.email__dialog > .main__dialog > .buttons > .btn__primary').click();
        //
        //.click();
        //.click();
        //
        //cy.get.clica_Nao_Deb_Aut();
        //
        // ######## TERMOS E CONDIÇÕES ########
        //cy.get.clicaConcordo.click();
        //cy.get.clicaEstouCiente.click();
        //cy.get.clicaConcluirPedido.click();
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />