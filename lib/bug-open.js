#!/usr/bin/env node

/**
 * Dependencies
 */

var program = require('commander');
var exec = require('child_process').exec;

program.parse(process.argv);
open(program.args[0] || current());

/**
 * Utils
 */

function current(done) {
  var cmd = 'git branch | grep "*" | tail -c 7';
  exec(cmd, done);
}

function open(bug) {
  var url = 'https://bugzilla.mozilla.org/show_bug.cgi?id=' + bug;
  var cmd = 'open ' + url;
  exec(cmd);
}
