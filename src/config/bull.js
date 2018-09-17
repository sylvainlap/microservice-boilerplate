const Queue = require('bull');

const { redis } = require('./vars');

exports.mailer = new Queue('mailer', { redis });
