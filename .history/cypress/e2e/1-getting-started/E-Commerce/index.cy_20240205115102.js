/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN580/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
        cy.get('/html/body/div[2]/div[2]/a[1]').click();
        //cy.get('//*[@id=\"dashboardId\"]/div[4]/div/div/div[3]/div[1]/a').click();
        //
        // ######## PEGAR O MSYSDN PRÉ ########
        //cy.get('#gender-male').click()
        //cy.get('#FirstName').type('LEONARDO')
        //
        //cy.get.setMSISDN(msisdn);
        cy.get('/html/body/div[5]/div[1]/div[4]/div[2]/div/div[3]/a').click();
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/div/div/div/button/p[1]').click();
        //
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/form/div[1]/div[1]/input').type('Leonardo da Motta Teixeira');
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/form/div[1]/div[2]/input').type('Guiomar da Motta Teixeira');
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/form/div[1]/div[3]/input').type('12101976');
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/form/div[2]/button').click();
        //
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div[1]/div/input').type("lteixeira@hotmail.com");
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div[2]/button').click();
        //
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div/div[1]/div/input').type("03178030");
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/button').click();
        //
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div/div/div[2]/input').type("321");
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/button').click();
        //
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/div/div[2]/div/a').click();
        cy.get('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div[2]/div[1]').click();
        //
        cy.get.('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div[2]/div[1]').click();
        cy.get.('/html/body/div[5]/div[1]/div[3]/div/div[3]/button[1]').click();
        //
        cy.get.('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/label/span').click();
        cy.get.('/html/body/div[5]/div[1]/div[6]/div/div[2]/div[2]/button').click();
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