/// <reference types="cypress" />
describe('Livraria da Travessa', () => {
  before(() => {
    cy.visit('http://www.travessa.com.br/')
    cy.screenshot()
  })
    it('Pesquisa de um livro', () =>{
      cy.get('#txtBusca')
      .type('Contos Eróticos')
      cy.get('.busca-bar')
      .click()
      //cy.contains('LIVRARIA DA TRAVESSA').should('be.visible')
      cy.get('h4').contains('Detalhes da Busca')
      cy.get('h1').contains('Minha página inicial')
      //
      cy.origin('http://www.travessa.com.br/', () => {
        cy.visit('https://www.travessa.com.br/wpgCarrinhoDados.aspx?pagina=wpgSuaConta.aspx&TipoArtigo=&TipoArtigo=0')
      cy.get('.usuario').type('lteixei@gmail.com')
      //EMAIL
      //cy.get('//form[@id=form1]/div[3]/nav/ul/a[4]')
      //.click()
      //SENHA
      //cy.get('//div[3]/input')
      //.click()
      //LOGIN
      //cy.get('//div[5]/input')
      //.click()
      //cy.contains('Detalhes da Busca ').should('be.visible')
    //})
      //
      //it('Se Cadastrar', () =>{
        
        //CADASTRO
        ////cy.get('//div/div/input')
        //.click()
        //
        //EMAIL
        //cy.get('//a[contains(@href, wpgSuaConta.aspx)]')
        //.click()
        //SENHA
        //cy.get('//div[3]/input')
        //.click()
        //LOGIN
        //cy.get('//div[5]/input')
        //.click()
        //cy.contains('IDENTIFICAÇÃO').should('be.visible')

      
      //
    //cy.iframe('#login-input1')
    //.as('iframe')
    //.find('[name="cpf"]')
    //cy.get('//label[@id=login-input1]/input[1]')
    //.should('be.visible')
    //.type('T3313299')
    //
    //cy.get('@iframe')
    //.find('[name="senha"]')
    //.type('Tim@12345')
    //
    //cy.get('@iframe')
    //.find('btn-login')
   // .click()



  //it('Login no SIEBEL', () =>{
    //
    //cy.get('#USER')
      //.should('be.visible')
      //.type('RAFAA1');
    //
    //cy.get('#PASSWORD')
    //.should('be.visible')
    //.type('Tim@12345');
    //
    //cy.get('#btnSubmit')
    //.should('be.visible')
    //.click();
  
    //PESQUISAR CPF - VER SE DÁ PARA COLOCAR UM IT 
    //cy.get('.siebui-crumb').should('be.visible')
    //cy.click('#j_s_sctrl_tabScreen')
    //cy.select('#ui-id-116')
    //cy.get('#ui-id-116').click()
      }
  )

}