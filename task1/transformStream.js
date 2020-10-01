const { Transform } = require('stream');

class TransformStream extends Transform {
  _transform(chunk, encoding, cb) {
    try {
      const data = chunk.toString().toUpperCase();
      return cb(null, data);
    } catch (err) {
      return cb(err);
    }
  }
}

module.exports = TransformStream;
