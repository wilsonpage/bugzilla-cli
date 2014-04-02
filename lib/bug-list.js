#!/usr/bin/env node

var program = require('commander');

program
  .command('assigned', 'currently assigned')
  .parse(process.argv);

console.log('list');