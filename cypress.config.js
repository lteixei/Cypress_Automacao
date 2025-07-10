const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // só o writer é necessário
      return config;
    },
    baseUrl: 'http://localhost:3000', // ou sua base real
  },
});
