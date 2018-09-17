const compress = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');

const routes = require('../api/routes');
const { logs } = require('./vars');
const strategies = require('./passport');
const error = require('../api/middlewares/error.middleware');

const app = express();

app.use(morgan(logs));
app.use(express.json());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use(passport.initialize());
passport.use('jwt', strategies.jwt);

app.use('/', routes);

app.use(error.notFound);
app.use(error.handler);

module.exports = app;
