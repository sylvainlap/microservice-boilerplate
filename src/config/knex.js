const knex = require('knex');

const { pgUri } = require('./vars');

const dbInstance = knex({
  client: 'pg',
  connection: pgUri,
});

module.exports = dbInstance;
