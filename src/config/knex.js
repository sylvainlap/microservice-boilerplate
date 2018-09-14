const knex = require('knex');

const { pgUri } = require('./vars');

const db = knex({
  client: 'pg',
  connection: pgUri,
});

module.exports = db;
