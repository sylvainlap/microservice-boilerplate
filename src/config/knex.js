const knex = require('knex');

const { postgres } = require('./vars');

const dbInstance = knex({
  client: 'pg',
  host: postgres.host,
  database: postgres.database,
  user: postgres.user,
  password: postgres.password,
});

module.exports = dbInstance;
