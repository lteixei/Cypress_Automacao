/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://fqa-lojatim.internal.timbrasil.com.br/skuPLN580/trifurcacao')
      cy.screenshot()
    })
    it('E-COMMERCE', () =>{
        cy.get('.cc-allow').click();
        cy.get(':nth-child(1) > .link').click();
        //
        // ######## PEGAR O MSYSDN PRÉ ########
        //cy.query('select F_chip_P2K(012) from dual').then();
        //cy.get('#FirstName').type('LEONARDO')
        //
        cy.get('.field').type('15981110026');
        cy.get('.row__buttons > .btn').click();
        cy.wait(20000) // wait for 2 seconds
        //
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(25000) // wait for 2 seconds
        //
        //INCLUSÃO DO NOME - MAE E DT NASCIMENTO
        cy.get(':nth-child(1) > .field').type('Leonardo da Motta Teixeira');
        cy.get(':nth-child(2) > .field').type('Guiomar da Motta Teixeira');
        cy.get(':nth-child(3) > .field').type('12101976');
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(25000) // wait for 2 seconds
        //
        //limpar campo de email
        //cy.wait(2000) // wait for 2 seconds
        //cy.get('#email')
        //.click()
        //.clear()
        //.type('lteixeira@gmail.com');
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(5000) // wait for 2 seconds
        //
        //INCLUSÃO DO CEP
        cy.get('#dadoInput').type("03178030");
        cy.get('.box__voltar__mobile > .btn').click();
        //
        //COMPLEMENTO DO ENDEREÇO
        cy.get('#numeroInput').type("321");
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(20000) // wait for 2 seconds
        //
        //COM PERNMANÊNCI OU SEM PERMANÊNCIA
        cy.get(':nth-child(2) > :nth-child(1) > .btn__payment').click();
        cy.get('.opcao__semPermanencia').click();
        cy.wait(20000) // wait for 2 seconds
        //
        //OPÇÃO ESCOLHIDA POR EMAIL
        cy.get('.opcao__email').click();
        cy.get('.email__dialog > .main__dialog > .buttons > .btn__primary').click();
        //
        //DATA DE VENCIMENTO
        cy.wait(2000) // wait for 2 seconds
        cy.get('#date7 > .row__dia > .radio__label > .checkmark').click();
        //
        //BOTAO CONTINUAR
        cy.wait(2000) // wait for 2 seconds
        cy.get('.box__voltar__mobile > .btn').click();
        cy.wait(2000) // wait for 2 seconds
        //
        //NÃO QUERO ATIVAR
        cy.get('.row__buttons > .btn__outline__primary').click();
        cy.wait(3000) // wait for 2 seconds
        //
        // ######## TERMOS E CONDIÇÕES ########
        cy.wait(2000) // wait for 2 seconds
        cy.get(':nth-child(2) > .label__checkbox').click();
        cy.get(':nth-child(4) > .label__checkbox').click();
        cy.get('.content__termos > .btn').click();
        cy.wait(15000) // wait for 2 seconds
        //
        // ######## CONDIÇÃO IF E ELSE ########
        //it ( 'Verifique se você encontrou', () => {
        cy.get('body').then ( (body) => {
          if (body.find ('.head-text-finalizacao1').length > 0)  {
            cy.get('.head-text-finalizacao').click();
          }

          if (body.find ('.head-text-finalizacao2').length > 0)  {
            cy.get('.head-text-finalizacao').click();
          }

          else {
            cy.get('.acompanhar-pedido-option-text').click();
          }
      })
    })
})    
