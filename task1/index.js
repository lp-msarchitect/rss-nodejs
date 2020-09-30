const commander = require('commander');

const program = new commander.Command();

program.storeOptionsAsProperties(false);

program
  .option('-s, --shift <shift>', 'a shist')
  .option('-i, --input <input-file>', 'an input file')
  .option('-o, --output <output-file>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv);

const programOptions = program.opts();
console.log(programOptions.action);
