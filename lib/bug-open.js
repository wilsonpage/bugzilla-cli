#!/usr/bin/env node

/**
 * Dependencies
 */

var currentBug = require('./current-bug');
var exec = require('child_process').exec;
var program = require('commander');

program.parse(process.argv);

getBug(function(err, bug) {
  open(bug);
});

/**
 * Utils
 */

function getBug(done) {
  var bug = program.args[0];
  if (bug) return done(null, bug);
  currentBug(done);
}

function open(bug) {
  var url = 'https://bugzilla.mozilla.org/show_bug.cgi?id=' + bug;
  var cmd = 'open ' + url;
  exec(cmd);
}
