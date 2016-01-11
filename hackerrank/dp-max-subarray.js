var assert = require('assert');
var testing = require('../testing/testing');

// https://www.hackerrank.com/challenges/maxsubarray
// Given array of integers, find maximum possible contiguous subarray

function maxSubarray(input) {
  var sumSoFar = 0, bestSum = 0;
  var start = 0, end = 0;
  var bestStartIndex = -1, bestEndIndex = -1;
  for (var i=0; i < input.length; ++i) {
    sumSoFar = sumSoFar + input[i];
    if (sumSoFar < 0) {
      sumSoFar = 0;
      start = end = i+1;
    } else {
      end = i;
    }
    if (sumSoFar > bestSum) {
      bestStartIndex = start;
      bestEndIndex = end;
      bestSum = sumSoFar;
    }
  }
  return [bestStartIndex, bestEndIndex];
}

function test() {
  assert.deepEqual(maxSubarray([1, -3, 5, -2, 9, -8, 6, 4]), [2, 7])
  assert.deepEqual(maxSubarray([1, -3, 5, -2, 9, -8, 6]), [2, 4])
}
testing.addTest(test);
