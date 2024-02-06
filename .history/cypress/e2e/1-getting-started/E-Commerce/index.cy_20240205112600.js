/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN582/trifurcacao')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
    cenariostelas.click_Aceitar_Cookies();
        cenariostelas.click_Troque_seu_plano();
        //
        // ######## PEGAR O MSYSDN PRÉ ########
        //cy.get('#gender-male').click()
        //cy.get('#FirstName').type('LEONARDO')
        //
        cy.get.setMSISDN(msisdn);
        cy.get.()();
        cy.get.clicaBotaoContinuarDepois_cpf();
        //
        cy.get.setColocar_nome("Leonardo da Motta Teixeira");
        cy.get.setColocar_nome_mae("Guiomar da Motta Teixeira");
        cy.get.setColocar_dt_nascimento("12101976");
        cy.get.clicaBotaoDados();
        //
        cy.get.setColocar_email("lteixeira@hotmail.com");
        cy.get.clicaBotaoContinuarDepois_email();
        //
        cy.get.setCep("03178030");
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