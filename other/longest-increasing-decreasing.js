var assert = require('assert');

// Given array of integers, find longest consequtive strickly increasing or decreasing subsequence

function getdx(last, cur) {
  if (cur < last) {
    return -1;
  } else if (cur > last) {
    return 1;
  } else {
    return 0;
  }
}

function lidr(arr) {
  if (arr.length <= 1) {
    return arr.length;
  }
  var last = arr[0];
  var streak = 1;
  var count = 1;
  var dx = null;
  var lastdx = null;
  for (var i = 1; i < arr.length; ++i) {
    // get directions
    dx = getdx(last, arr[i]);
    last = arr[i];
    if (lastdx === null)
      lastdx = dx;

    // compare to last direction
    if (dx !== lastdx) {
      if (count > streak) {
        streak = count;
      }
      lastdx = dx;
      // if dx is 0, we don't have a subsequence, otherwise, we have 2 elements
      count = dx === 0 ? 1 : 2;
    } else {
      count += 1;
    }
  }
  if (count > streak) {
    streak = count;
  }
  return streak;
}

function test() {
  assert.equal(lidr([1, 2, 3]), 3);
  assert.equal(lidr([1, 2, 3, 2, 1]), 3);
  assert.equal(lidr([1, 2, 4, 3, 2, 1]), 4);
}

module.exports = {test: true, func: test};
