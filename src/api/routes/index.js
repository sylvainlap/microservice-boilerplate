const express = require('express');

const { env } = require('../../config/vars');
const { name, version } = require('../../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  const stats = {
    env,
    nodeVersion: process.version,
    name,
    version,
    uptime: process.uptime(),
  };

  return res.json(stats);
});

router.use('/docs', express.static('docs'));

module.exports = router;
