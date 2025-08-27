/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

describe('Automação de Produtos e Carrinho - Automation Exercise', () => {

    before(() => {
        cy.visit('/', { timeout: 120000 });
        cy.allure().feature('Produtos e Carrinho');
    });

    it('Deve adicionar todos os produtos da página Products ao carrinho', () => {
        cy.allure().label('tag', 'add-to-cart');
        cy.allure().feature('Carrinho de Compras');

        cy.visit('/products');

        // Função para adicionar produto ao carrinho usando hover
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
        function addToCart(productContainerXpath, addButtonXpath) {
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]', { timeout: 10000 }).trigger('mouseover'); // Passa o mouse sobre o container do produto
            cy.get('/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]/div/a', { timeout: 10000 }).click({ force: true }); // Clica no botão que aparece
        };
    });

});
