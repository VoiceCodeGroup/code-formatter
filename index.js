const { buffer, text, json } = require('micro');
const cors = require('micro-cors')();
const prettier = require('prettier');

const handler = async req => {
  const data = await json(req);
  console.log('Request', data);

  const code = data.code;
  const options = data.options;
  return prettier.format(code, options).slice(1);

  return beautify(code, bOptions);
};

module.exports = cors(handler);
