const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: false
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
});
