const sqlServer = require('cypress-sql-server');

module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
}

setupNodeEvents(on, config) {
  return require('./cypress/plugins/index.js')(on, config)
},