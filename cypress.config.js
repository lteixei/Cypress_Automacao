const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: false,
    setupNodeEvents(on, config) {
    allureWriter(on, config);
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
});
