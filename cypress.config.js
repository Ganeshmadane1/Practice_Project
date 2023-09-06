module.exports = {
  
   env:{

    baseUrl:"https://www.google.com/"

   },
  e2e: {
    "baseUrl":"https://www.google.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "specPattern":"cypress/e2e/*.js"
  },
};
