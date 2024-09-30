require('ts-node/register'); // Adicione isso no início do seu cypress.config.ts
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Suas configurações de teste
  reporter: 'cypress-junit',
  reporterOptions: {
    mochaFile: 'results/junit/results-[hash].xml', // Caminho para os resultados dos testes
    toConsole: true,
  },
});
