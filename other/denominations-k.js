var assert = require('assert');
var testing = require('../testing/testing');

// Given a list of denominations (e.g., [ 1, 2, 5 ] means you have coins worth $1, $2, and $5) 
// and a number k, find all possible combinations, if any, of coins in the given denominations that add up to k, including repeats.
// d - denominations array
// k - the sum we want to reach
function coins(d, k) {
  function find(startIndex, sum, path) {
    if (sum == k) {
      return [path];
    }
    let results = [];
    for (let i = startIndex; i < d.length; ++i) {
      if (sum + d[i] <= k) {
        results = results.concat(find(i, sum+d[i], path + d[i].toString()));
      }
    }
    return results;
  }
  return find(0, 0, "");
}

function test() {
  assert.deepEqual([ '11111', '1112', '122', '5' ], coins([1, 2, 5], 5));
}
testing.addTest(test);
