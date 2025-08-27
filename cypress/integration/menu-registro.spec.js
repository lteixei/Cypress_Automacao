/// <reference types="Cypress" />
import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

describe('Login e Logout no Automation Exercise - versão IA', () => {

    const AIUser = {
        email: "lteixei@gmail.com",
        password: "123456"
    };

    beforeEach(() => {
        cy.visit('/', { timeout: 120000 });
    });

    it('Deve realizar login com sucesso usando dados fixos', () => {
        cy.allure().label('tag', 'login');
        cy.allure().feature('Funcionalidade de Login');

        cy.visit('/login');
        cy.xpath('//form[@action="/login"]//input[@name="email"]').type(AIUser.email, { delay: 50 });
        cy.xpath('//form[@action="/login"]//input[@name="password"]').type(AIUser.password, { delay: 50 });
        cy.xpath('//form[@action="/login"]//button[@type="submit"]').click();

        // Verifica se o logout ficou visível após login
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').should('contain.text', 'Logout');
    });

    it('Deve realizar logout com sucesso', () => {
        // Primeiro faz login
        cy.visit('/login');
        cy.xpath('//form[@action="/login"]//input[@name="email"]').type(AIUser.email, { delay: 50 });
        cy.xpath('//form[@action="/login"]//input[@name="password"]').type(AIUser.password, { delay: 50 });
        cy.xpath('//form[@action="/login"]//button[@type="submit"]').click();

        // Faz logout
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a', { timeout: 10000 }).click();

        // Verifica se voltou para a página de login
        cy.url().should('include', '/login');
    });

});
