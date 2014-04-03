
/**
 * Dependencies
 */

var exec = require('child_process').exec;

module.exports = function(done) {
  var cmd = 'git branch | grep "*" | tail -c 7';
  exec(cmd, done);
};