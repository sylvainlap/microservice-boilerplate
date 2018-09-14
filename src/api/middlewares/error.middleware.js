const { env } = require('../../config/vars');

exports.notFound = (req, res, next) => {
  const err = new Error('Not found');
  err.statusCode = 404;
  return next(err);
};

exports.handler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const response = {
    statusCode,
    message: err.message,
    stack: env === 'production' ? null : err.stack,
  };

  res.status(statusCode);
  res.json(response);
};
