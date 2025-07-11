const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  videoCompression: true,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // só o writer é necessário
      return config;
    },
    baseUrl: 'http://localhost:8081', // ou sua base real
  },
  env: {
    allure: true,
},
});
