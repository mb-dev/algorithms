var assert = require('assert');
var testing = require('../testing/testing');

// find an element in a sorted array

function binarySearch(arr, val) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l+r)/2);
    if (arr[m] < val) {
      l = m + 1;
    } else if (arr[m] === val) {
      return m;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

function test() {
  assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
  assert.equal(binarySearch([1, 2, 3, 5, 5], 1), 0);
  assert.equal(binarySearch([1, 2, 3, 5], 3), 2);
}
testing.addTest(test);

module.exports = binarySearch;
