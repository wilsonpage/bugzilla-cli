#!/usr/bin/env node

/**
 * Dependencies
 */

var program = require('commander');
var request = require('request');

program
  .option('-b, --bug [bug]', 'Bug')
  .parse(process.argv);

var url = createUrl({ email: program.user });

request.get({ url: url, json: true }, function (e, r, json) {
  var items = json.attachments;

  items
    .filter(isPullRequest)
    .filter(notObsolete)
    .forEach(print);
});

function print(item) {
  console.log('%s - %s by %s', item.id, item.description, item.attacher.name);
}

function createUrl(options) {
  var email = encodeURI(options.email);
  return [
    'https://api-dev.bugzilla.mozilla.org/latest/bug/',
    program.bug,
    '/attachment'
  ].join('');
}

function isPullRequest(attachment) {
  return attachment.content_type === 'text/x-github-pull-request';
}

function notObsolete(attachment) {
  return attachment.is_obsolete !== true;
}