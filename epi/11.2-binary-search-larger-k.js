var assert = require('assert');
var testing = require('../testing/testing');

function largerThanK(arr, k) {
  var l = 0, u = arr.length - 1;
  var minLarger = -1;
  while (l <= u) {
    var m = Math.floor((l+u)/2);
    if (arr[m] <= k) {
      l = m + 1;
      // optimization, if there's no repeats, there's a chance the next element will be greater
      if (arr[m+1] > k) {
        return m+1;
      }
    } else {
      minLarger = m;
      u = m - 1;
    }
  }
  if (minLarger !== -1) {
    return minLarger;
  } else {
    return -1;
  }
}

function test() {
  assert.equal(largerThanK([1, 2, 3, 4, 5], 2), 2);
  assert.equal(largerThanK([1, 2, 3, 5, 5], 1), 1);
  assert.equal(largerThanK([1, 2, 3, 5], 5), -1);
  assert.equal(largerThanK([1, 2, 2, 2, 2, 2, 2, 2, 3, 5], 3), 9);
}
testing.addTest(test);
