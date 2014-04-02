#!/usr/bin/env node

var program = require('commander');
var request = require('request');

program
  .option('-u, --user [user]', 'User', 'wilsonpage@mozilla.com')
  .parse(process.argv);

var url = createUrl({ email: program.user });

request.get({ url: url, json: true }, function (e, r, json) {
  console.log(json);
});

function createUrl(options) {
  var email = encodeURI(options.email);
  return [
    'https://api-dev.bugzilla.mozilla.org/latest/bug?',
    'bug_status=__open__&',
    'email1=' + email + '&',
    'emailcc1=1&',
    'emailtype1=exact&',
    'include_fields=summary,component,ref,status,id,last_change_time,op_sys,product'
  ].join('');
}