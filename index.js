const fs = require('fs');
const { send, sendError } = require('./response');

// $ lambda-local -l index.js -h load -e event-samples/load.js
module.exports.load = (event, context, callback) => {
  const { body } = event;
  const file = body.substr(body.lastIndexOf('=') + 1);
  const map = require(`./maps/${file}`);
  send(callback, {
    success: true,
    response: {
      filename: file.replace('_', ' ').substr(0, file.lastIndexOf('.')),
      map
    },
  });
};

// $ lambda-local -l index.js -h list -e event-samples/list.js
module.exports.list = (event, context, callback) => {
  fs.readdir('./maps', (err, files) => {
    const data = files.map((file, index) => ({
      'id': index + 1,
      'file': file,
      'name': file.replace('_', ' ').substr(0, file.lastIndexOf('.')),
    }));
    send(callback, {
      success: true,
      data,
    });
  })
};
