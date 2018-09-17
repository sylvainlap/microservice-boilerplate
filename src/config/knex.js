const knex = require('knex');

const { postgres } = require('./vars');

const dbInstance = knex({
  client: 'pg',
  ...postgres,
});

module.exports = dbInstance;
