const { AppError, BadRequestError, NotFoundError } = require('./error');

function send(callback, body, statusCode = 200) {
  const response = {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };
  return callback(null, response);
}
module.exports.send = send;

function sendError(callback, error) {
  console.error(error);
  if (error instanceof BadRequestError) {
    return send(callback, error.message, 400);
  } else if (error instanceof NotFoundError) {
    return send(callback, error.message, 404);
  } else if (error instanceof AppError) {
    return send(callback, error, 401);
  } else {
    return send(callback, error, 500);
  }
}
module.exports.sendError = sendError;
