#!/usr/bin/env node

const figlet = require('figlet');
const program = require('commander');

console.log(figlet.textSync('pizza-cli', { horizontalLayout: 'full' }));

program
  .version('0.0.1')
  .description('An example CLI for ordering pizza')
  .option('-p', '--peppers', 'Add peppers')
  .option('-P', '--pineapple', 'Add pineapple')
  .option('-b', '--bbq', 'Add BBQ sauce')
  .option('-c', '--cheese <type>', 'Add the specified type of cheese')
  .option('-C', '--no-cheese', 'You do not want any cheese')
  .parse(program.argv);

console.log('You ordered a pizza with:');

if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');

const cheese: string =
  program.cheese === true ? 'marble' : program.cheese || 'no';

console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
