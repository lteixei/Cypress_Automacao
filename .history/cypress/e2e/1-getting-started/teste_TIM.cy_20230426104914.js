/// <reference types="cypress iframe" />
describe('Livraria da Travessa', () => {
  before(() => {
    cy.visit('https://www.travessa.com.br/')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
    cy.get('#txtBusca').type('Contos Eróticos')
    cy.get('.busca-bar').click();
    cy.get('#gridBusca_ctl00_a_btnComprar').click();
    cy.get('#dgCarrinho_ctl02_lnkObjDesejo').click();
    //cy.get('#dgCarrinho_ctl02_chkPresente').click();
  //
    cy.get('#txtEmail2').type('lteixei@gmail.com')
    cy.get('#txtSenha').type('leolmt0406')
    cy.get('#btnLogar').click();
    cy.contains('Usuário ou Senha inválidos!').should('be.visible')
    //
    //NOVO CLIENTE - JÁ EXISTENTE
    cy.get('#btnCadastrar_1').click();
    //
    cy.get('#txtEmail').type('lteixei@gmail.com');
    cy.get('#btnCadastrarNovoCliente').click(); 
    cy.contains('E-mail já cadastrado!').should('be.visible')
    cy.get('#btnVoltar').click();
    //
    //NOVO CLIENTE COM NOVO E-MAIL
    cy.get('#btnCadastrar_1').click();
    //
    cy.get('#txtEmail').type('lteixei@hotmail.com');
    cy.get('#btnCadastrarNovoCliente').click(); 
    cy.contains('MINHA CONTA').should('be.visible')
    //
    //CADASTRO COMPLETO NO SITE
    cy.get('#txtNome').type('Leonardo');
    //
    cy.get('#txtApelido').type('leo');
    cy.get('#txtCPF').type('07158481786');
    cy.get('#ddlSexo').type('Masculino');
    cy.get('#txtDia').type('12101976');
    cy.get('#txtTelCelularDDD').type('21');
    cy.get('#txtSenha').type('leolmt0406');
    cy.get('#txtConfirmaSenha').type('leolmt0406');
    cy.get('#txtCep1').type('21341370');
    cy.get('#txtEndereco').type('Rua Comendador Pinto');
    cy.get('#txtNumero').type('516');
    cy.get('#lblComplemento').type('bloco 1 apt 401');
    cy.get('#txtBairro').type('Campinho');
    cy.get('#chkSugestoes').click();
    cy.get('#btnProsseguir').click();
    
    
    //cy.contains('E-mail não encontrado!').should('be.visible')
    //cy.get('#txtSenha').type('leolmt0406')
    //cy.get('#btnLogar').click();
    
    //cy.get('#iframe-id')
  //.iframe('body #elementToFind')
  //.should('exist')
  })
})
      //cy.contains('LIVRARIA DA TRAVESSA').should('be.visible')
      //cy.get('h4').contains('Detalhes da Busca')
      //cy.get('h1').contains('Minha página inicial')
      //    
  