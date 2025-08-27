/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Automação no site Automation Exercise', () => {

    before(() => {
        cy.allure().feature('Testes de Login e Funcionalidades da Página Inicial')
            .story('Verificação de funcionalidades principais');
        cy.log('Preparando o teste...');
    });

    it('Deve validar o carregamento correto da página inicial', () => {
        cy.allure().label('tag', 'smoke-test');

        cy.visit('/', { timeout: 120000 });
        cy.title().should('eq', 'Automation Exercise');
        cy.get('.logo img', { timeout: 20000 }).should('be.visible');

        cy.screenshot('home-page');
        cy.allure().step('Página inicial carregada corretamente');
    });


    it('Deve fazer login', () => {
        cy.allure().label('tag', 'login');
        cy.allure().feature('Funcionalidade de Login');

        cy.visit('/login');

        cy.get('form[action="/login"] input[name="email"]').type('lteixei@gmail.com', { delay: 50 });
        cy.get('form[action="/login"] input[name="password"]').type('123456', { delay: 50 });
        cy.get('form[action="/login"] button[type="submit"]').click();
    });

    it('Deve validar o processo de adição de produto ao carrinho', () => {
        cy.allure().label('tag', 'add-to-cart');
        cy.allure().feature('Carrinho de Compras');

        cy.visit('/products');

        // Função para adicionar produto ao carrinho usando hover
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };

        // Verificar carrinho
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a', { timeout: 10000 })
            .should('contain.text', 'Cart');

        // cy.screenshot('product-added-to-cart');
        // cy.allure().step('Produto adicionado ao carrinho');
    });

    it('Deve efetuar o logout e fechar', () => {
        //LOGIN-logar
        cy.allure().label('tag', 'login');
        cy.allure().feature('Funcionalidade de Login');

        cy.visit('/login');
        cy.get('form[action="/login"] input[name="email"]').type('lteixei@gmail.com', { delay: 50 });
        cy.get('form[action="/login"] input[name="password"]').type('123456', { delay: 50 });
        cy.get('form[action="/login"] button[type="submit"]').click();

        //lOGOUT-deslogar
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a', { timeout: 10000 }).click();
    });

    after(() => {
        cy.allure().feature('Finalizando os testes').step('Teste completo');
        cy.log('Finalizando todos os testes...');
    });

});
