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
    //
    cy.get('#txtEmail2').type('lteixei@gmail.com')
    cy.get('#txtSenha').type('leolmt0406')
    cy.get('#btnLogar').click();
    cy.contains('Usuário ou Senha inválidos!').should('be.visible')
    //
//TESTANDO LOGIN COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    cy.get('#btnCadastrar_1').click();
    //
    cy.get('#txtEmail').type('lteixei@gmail.com');
    cy.get('#btnCadastrarNovoCliente').click(); 
    cy.contains('E-mail já cadastrado!').should('be.visible')
    cy.get('#btnVoltar').click();
    //
//TESTANDO LOGIN COM E-MAIL HOTMAIL - E-MAIL NÃO CADASTRADO
    cy.get('#btnCadastrar_1').click();
    //
    cy.get('#txtEmail').type('lteixei@hotmail.com');
    cy.get('#btnCadastrarNovoCliente').click(); 
    cy.contains('MINHA CONTA').should('be.visible')
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    cy.contains('LIVRARIA DA TRAVESSA');
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
    cy.get('#btnProsseguir').click();
    //
//FICOU FALTANDO INSERIR O TELEFONE NO CADASTRO - CPF JÁ UTILIZADO
    cy.get('#txtTelCelular').type('964171960')//.scrollTo('top');
    cy.get('#txtTelResidencialDDD').type('21');
    cy.get('#txtTelResidencial').type('34491789');
    cy.get('#btnProsseguir').click();
    //
//CLICANDO EM ESQUECI A SENHA E PEGANDO NO EMAIL    
    cy.get('.usuario').click();
    cy.get('.d-md-flex > .w-100 > .LoginStrore').click();
    //
    cy.get('#txtEmail2').type('lteixei@gmail.com');
    cy.get('#lnkCliqueAqui').click();Atenção: 
    cy.contains('Você receberá um link para atualização da sua senha no e-mail: lteixei@gmail.com').should('be.visible')
    //
//LOGAR AGORA COM EMAIL E SENHA CERTOS
    cy.get('#txtEmail2').type('lteixei@gmail.com')
    cy.get('#txtSenha').type('lmt0406')
    cy.get('#btnLogar').click();
    cy.contains('Minha Conta').should('be.visible')
    //
//OBJETO DE DESEJO
    cy.get('#lnkObjDesejo').click();
    cy.get('[href="wpgObjDesejo.aspx?Tipo=1"]').click();
    //cy.get('.col-3 > div.checkbox').check({ force: true }).should('be.checked')
    cy.scrollTo('bottom')
    //
//FILMES E SHOWS 
    cy.contains('DVDs por Segmento');
    cy.get(':nth-child(4) > ul > :nth-child(7) > a').click();
    cy.get('#dgLista_ctl06_lnkNomAutor').click({force: true});
    //
// SCROLL É ASSIM QUE SE USA
    cy.scrollTo(0, 800) 
    cy.get('.catList > :nth-child(3)').click();
    //
    cy.scrollTo(0, 300)
    cy.get('#lnkComprar').click();

//FRAME É ASSIM QUE SE USA    
    cy.iframe('aut-iframe').find('#lnkComprar').click();
    //
    
  })
})
      