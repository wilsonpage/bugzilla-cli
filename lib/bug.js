#!/usr/bin/env node

/**
 * Dependencies
 */

var program = require('commander');

program
  .version('0.0.1')
  .command('list', 'list packages installed')
  .command('open', 'open bug in browser')
  .command('prs', 'list attached pull-requests')
  .parse(process.argv);
