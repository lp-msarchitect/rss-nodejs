const { Transform } = require('stream');
const code = require('./chipr');

class CodingStream extends Transform {
  constructor({ shift, isEncode }) {
    super();
    this.shift = shift;
    this.isEncode = isEncode;
  }

  _transform(chunk, encoding, cb) {
    try {
      const data = code(chunk.toString(), +this.shift, this.isEncode);
      return cb(null, data);
    } catch (err) {
      return cb(err);
    }
  }
}

module.exports = CodingStream;
