var pluralize = require('pluralize')
var ANSI_GREEN = "\u001B[32m";
var ANSI_RESET = "\u001B[0m";

var glob = require("glob")
glob("**/*.js", {ignore: ['node_modules/**', 'test.js']}, function (er, files) {
  for (file of files) {
    require('./' + file)();
  }
  console.log(ANSI_GREEN +  (files.length) + ' ' + pluralize('test', files.length) + ' passed' + ANSI_RESET);
});
