var pluralize = require('pluralize');
var testing = require('./testing/testing');
var ANSI_GREEN = "\u001B[32m";
var ANSI_RESET = "\u001B[0m";

var glob = require("glob")
glob("**/*.js", {ignore: ['node_modules/**', 'test.js']}, function (er, files) {
  var tests = 0;
  for (var file of files) {
    var obj = require('./' + file);
  }
  for (var test of testing.getTests()) {
    test();
    tests += 1;
    process.stdout.write(ANSI_GREEN + "." + ANSI_RESET);
  }
  console.log("\n" + ANSI_GREEN + (tests) + ' ' + pluralize('test', tests) + ' passed' + ANSI_RESET + "\n");
});
