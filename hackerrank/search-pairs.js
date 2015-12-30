var assert = require('assert');
var readInput = require('./helper');

// https://www.hackerrank.com/challenges/pairs
// Given N integers, count the number of pairs of integers whose difference is K.

function searchPairs(arr, k) {
  var arrObj = {};
  for (var i = 0; i < arr.length; ++i) {
    arrObj[arr[i]] = true;
  }
  var pairs = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arrObj[arr[i] + k] == true) {
      pairs += 1;
    }
  }
  return pairs;
}

function fromInput(fileName) {
  var input = readInput(fileName);
  var lines = input.split("\n");
  var firstLine = lines[0].split(' ');
  var n = parseInt(firstLine[0]), k = parseInt(firstLine[1]);
  var arr = lines[1].split(' ').map(function(s) { return parseInt(s); });
  return searchPairs(arr, k);
}

function test() {
  assert.equal(searchPairs([1, 5, 3, 4, 2], 2), 3);
  assert.equal(fromInput('inputs/search-pairs-1.txt'), 80);
}

module.exports = {test: true, func: test};
