const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'https://rem-fe.stg.happyhomes.id/',
    chromeWebSecurity: false
  },
});
