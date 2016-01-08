var assert = require('assert');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Write a function that generates the power set.
// powerset(['a', 'b', 'c']) -> ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']

function powerset(arr) {
  var result = [''];
  for (var i = 0; i < arr.length; ++i) {
    var prevLength = result.length;
    for (var j = 0; j < prevLength; ++j) {
      result.push(result[j] + arr[i]);
    }
  }
  return result;
}

function generateRandomCheckProperties() {
  var n = getRandomInt(1, 10);
  var arr = [];
  for (var i = 0; i < n; ++i) {
    var ch;
    // choose a character in the range of a - charAt('a' + length) that was not used already
    do {
      ch = String.fromCharCode('a'.charCodeAt() + getRandomInt(0, length))
    } while(arr.indexOf(ch) >= 0);
    arr.push(ch);
  }

  arr = arr.sort();
  var result = powerset(arr);

  // length should be 2^n
  assert.equal(result.length, Math.pow(2, arr.length));
}

function test() {
  assert.deepEqual(powerset(['a', 'b', 'c']), [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]);
  for (var i = 0; i < 5; ++i) {
    generateRandomCheckProperties();
  }
}

module.exports = {test: true, func: test};
