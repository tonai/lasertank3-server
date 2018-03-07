const util = require('util');

function BadRequestError(message) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;

  this.message = (message || 'Bad request');
}
util.inherits(BadRequestError, Error);
module.exports.BadRequestError = BadRequestError;

function NotFoundError(message) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;

  this.message = (message || 'Not found');
}
util.inherits(NotFoundError, Error);
module.exports.NotFoundError = NotFoundError;

function AppError(error) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;

  this.message = (error.message || 'Error');
  this.code = error.code;
}
util.inherits(AppError, Error);
module.exports.AppError = AppError;
