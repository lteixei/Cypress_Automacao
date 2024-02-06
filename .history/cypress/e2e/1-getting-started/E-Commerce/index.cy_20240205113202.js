/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN582/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
        cy.get('/html/body/div[2]/div[2]/a[1]').click();
        cy.get('//*[@id=\"dashboardId\"]/div[4]/div/div/div[3]/div[1]/a').click();
        //
        // ######## PEGAR O MSYSDN PRÉ ########
        //cy.get('#gender-male').click()
        //cy.get('#FirstName').type('LEONARDO')
        //
        cy.get.setMSISDN(msisdn);
        cy.get.('/html/body/div[5]/div[1]/div[4]/div[2]/div/div[3]/a').click();
        cy.get.('/html/body/div[5]/div[1]/div[6]/div/div/div[2]/div/div/div/button/p[1]').click();
        //
        cy.get.setColocar_nome.type("Leonardo da Motta Teixeira");
        cy.get.setColocar_nome_mae.type("Guiomar da Motta Teixeira");
        cy.get.setColocar_dt_nascimento.type("12101976");
        cy.get.clicaBotaoDados();
        //
        cy.get.setColocar_email.type("lteixeira@hotmail.com");
        cy.get.clicaBotaoContinuarDepois_email();
        //
        cy.get.setCep.type("03178030");
        cy.get.clicaBotaoDepoisCep();
        //
        cy.get.setNumero("321");
        cy.get.clicaBotao_End();
        //
        cy.get.clicaBotaoFatura();
        cy.get.clicaComPermanencia_12_Meses();
        //
        cy.get.clicaPor_Email();
        cy.get.clica_OK_Email();
        //
        cy.get.clica_Dt_Nasc();
        cy.get.clica_OK_Dt_Nasc();
        //
        cy.get.clica_Nao_Deb_Aut();
        //
        // ######## TERMOS E CONDIÇÕES ########
        cy.get.clicaConcordo();
        cy.get.clicaEstouCiente();
        cy.get.clicaConcluirPedido();
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />