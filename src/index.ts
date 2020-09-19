#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();

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
