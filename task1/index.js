const commander = require('commander');
const util = require('util');
const stream = require('stream');
const CodingStream = require('./CodingStream');
const { inputStream, outputStream } = require('./IOStreams.js');
const checkOptions = require;

const pipeline = util.promisify(stream.pipeline);

async function processRun() {
  try {
    const program = new commander.Command();

    program.storeOptionsAsProperties(false);

    program
      .option('-s, --shift <shift>', 'a shist')
      .option('-i, --input <input-file>', 'an input file')
      .option('-o, --output <output-file>', 'an output file')
      .option('-a, --action <action>', 'an action encode/decode')
      .parse(process.argv);

    const { input, output, shift, action } = checkOptions(program.opts());

    const readStream = await inputStream(input);
    const writeStream = await outputStream(output);

    let transformStream;

    if (action === 'encode') {
      transformStream = new CodingStream(shift, true);
    }
    if (action === 'decode') {
      transformStream = new CodingStream(shift, false);
    }

    pipeline(readStream, transformStream, writeStream).then(() => {
      console.log('Done');
    });

    process.stdout.write(`Operation '${action}' is done.`);
  } catch (error) {
    process.stderr.write(`${error.name}. ${error.message}\n`);
    // eslint-disable-next-line no-process-exit
    process.exit(error.exitCode);
  }
}

processRun();
