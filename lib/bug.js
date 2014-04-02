#!/usr/bin/env node

// var exec = require('child_process').exec;
// var openBugCommand = 'open https://bugzilla.mozilla.org/show_bug.cgi?id=';
// var currentBranchCommand = 'git branch | grep "*" | tail -c 7';
// var openBug = function(bugNumber) {
//   exec(openBugCommand + bugNumber, function (error, stdout, stderr) {
//     process.exit(0);
//   });
// };

// if (process.argv.length == 2) {
//   exec(currentBranchCommand, function (error, stdout, stderr) {
//     openBug(stdout);
//   });
// } else {
//   openBug(process.argv[2]);
// }

var program = require('commander');

program
  .version('0.0.1')
  .command('list', 'list packages installed')
  .parse(process.argv);
