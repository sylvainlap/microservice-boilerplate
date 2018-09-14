const express = require('express');

const router = express.Router();

router.get('/status', (req, res) => res.json('OK'));

router.use('/docs', express.static('docs'));

module.exports = router;
