var pluralize = require('pluralize');
var testing = require('./testing/testing');
var ANSI_GREEN = "\u001B[32m";
var ANSI_RESET = "\u001B[0m";
var ANSI_RED = "\u001B[0;31m";

var glob = require("glob")
glob("**/*.js", {ignore: ['node_modules/**', 'test.js']}, function (er, files) {
  var tests = 0;
  for (var file of files) {
    var obj = require('./' + file);
  }
  let testsRemaining = testing.getTests();
  let testCount = testsRemaining.length;
  function complete() {
    console.log("\n" + ANSI_GREEN + (testCount) + ' ' + pluralize('test', testCount) + ' passed' + ANSI_RESET + "\n");
  }
  function nextTest() {
    if (testsRemaining.length == 0) {
      complete();
      return;
    }
    process.stdout.write('.');
    let test = testsRemaining.pop();
    if (test.async) {
      // for async test - ensure the test finishes within 250ms
      let timeoutId = null;
      let callback = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        // clear stacktrace for next test
        setTimeout(nextTest, 0);
      }
      test.func(callback);
      timeoutId = setTimeout(function() {
        console.log(ANSI_RED + 'async test timed out!' + ANSI_RESET);
        // remove the callback, so if function finishes later, we don't continue running other tests
        callback = function() {};
      }, 250);
    } else {
      test.func();
      setTimeout(nextTest, 0);
    }
  }
  nextTest();
});
