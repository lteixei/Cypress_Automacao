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
        cenariostelas.clicaBotaoContinuar();
        cy.get.clicaBotaoContinuarDepois_cpf();
        //
        cenariostelas.setColocar_nome("Leonardo da Motta Teixeira");
        cenariostelas.setColocar_nome_mae("Guiomar da Motta Teixeira");
        cenariostelas.setColocar_dt_nascimento("12101976");
        cenariostelas.clicaBotaoDados();
        //
        cenariostelas.setColocar_email("lteixeira@hotmail.com");
        cenariostelas.clicaBotaoContinuarDepois_email();
        //
        cenariostelas.setCep("03178030");
        cenariostelas.clicaBotaoDepoisCep();
        //
        cenariostelas.setNumero("321");
        cenariostelas.clicaBotao_End();
        //
        cenariostelas.clicaBotaoFatura();
        cenariostelas.clicaComPermanencia_12_Meses();
        //
        cenariostelas.clicaPor_Email();
        cenariostelas.clica_OK_Email();
        //
        cenariostelas.clica_Dt_Nasc();
        cenariostelas.clica_OK_Dt_Nasc();
        //
        cenariostelas.clica_Nao_Deb_Aut();
        //
        // ######## TERMOS E CONDIÇÕES ########
        cenariostelas.clicaConcordo();
        cenariostelas.clicaEstouCiente();
        cenariostelas.clicaConcluirPedido();
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />