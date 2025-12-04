// Generic error handler for API responses
const errorHandler = (err, req, res, next) => {
  const status = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Server Error'
  });
};

module.exports = errorHandler;
