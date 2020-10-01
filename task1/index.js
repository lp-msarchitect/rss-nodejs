const commander = require('commander');
const fs = require('fs');
const util = require('util');
const stream = require('stream');
const TransformStream = require('./transformStream');

const pipeline = util.promisify(stream.pipeline);
const program = new commander.Command();

program.storeOptionsAsProperties(false);

program
  .option('-s, --shift <shift>', 'a shist')
  .option('-i, --input <input-file>', 'an input file')
  .option('-o, --output <output-file>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv);

const programOptions = program.opts();

const inputFileName = programOptions.input;
const outputFileName = programOptions.output;

const readStream = fs.createReadStream(inputFileName, 'utf-8');
const writeStream = fs.createWriteStream(outputFileName, 'utf-8');
const transformStream = new TransformStream();

pipeline(readStream, transformStream, writeStream).then(() => {
  console.log('Done');
});
