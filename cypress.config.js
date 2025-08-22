// Importando o defineConfig do Cypress
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Configuração dos arquivos de teste
    specPattern: 'cypress/integration/**/*.spec.js',  // Caminho correto para os testes
    baseUrl: 'http://localhost:8081', // Base URL, altere conforme necessário
  },
});
