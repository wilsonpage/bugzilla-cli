#!/usr/bin/env node

var program = require('commander');

program
  .command('cced', 'cc\'d on')
  .command('assigned', 'currently assigned')
  .parse(process.argv);

console.log('list');