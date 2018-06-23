const { buffer, text, json } = require('micro');
const cors = require('micro-cors')();
const prettier = require('prettier');

const handler = async req => {
  const data = await json(req);
  console.log('Request', data);

  const code = data.code;
  const options = data.options;
  const mode = data.mode;

  let formattedCode = prettier.format(code, options);
  if (mode === 'html') {
    // remove leading semicolon
    formattedCode = formattedCode.slice(1);
  }
  return { formattedCode };
};

module.exports = cors(handler);
