const commander = require('commander');
const fs = require('fs');
const util = require('util');
const stream = require('stream');
const CodingStream = require('./CodingStream');

const pipeline = util.promisify(stream.pipeline);
const program = new commander.Command();

program.storeOptionsAsProperties(false);

program
  .option('-s, --shift <shift>', 'a shist')
  .option('-i, --input <input-file>', 'an input file')
  .option('-o, --output <output-file>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv);

const { input, output, shift, action } = program.opts();

const readStream = fs.createReadStream(input, 'utf-8');
const writeStream = fs.createWriteStream(output, 'utf-8');

let transformStream;

console.log(action);

if (action === 'encode') {
  transformStream = new CodingStream(shift, true);
} else if (action === 'decode') {
  transformStream = new CodingStream(shift, false);
}

pipeline(readStream, transformStream, writeStream).then(() => {
  console.log('Done');
});
