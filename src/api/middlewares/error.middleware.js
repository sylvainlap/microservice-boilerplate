const { env } = require('../../config/vars');

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
  const err = new Error('Not found');
  err.statusCode = 404;
  return next(err);
};

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
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
