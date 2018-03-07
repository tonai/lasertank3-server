function getParams (event) {
  if (event.queryStringParameters) {
    return event.queryStringParameters;
  }
  return {};
}
module.exports.getParams = getParams;

function getPayload (event) {
  if (event.body) {
    return JSON.parse(event.body);
  }
  return {};
}
module.exports.getPayload = getPayload;
