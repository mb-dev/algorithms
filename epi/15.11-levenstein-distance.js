var assert = require('assert');
var testing = require('../testing/testing');

// Minimum distance
// https://www.youtube.com/watch?v=We3YDTzNXEk
function distance(from, to) {
  from = from.split('');
  to = to.split('');
  if (from.length === 0) return to.length;
  if (to.length === 0) return from.length;

  const matrix = [];

  for (let i = 0; i <= to.length; ++i) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= from.length; ++j) {
    matrix[0][j] = j;
  }
  for(let i = 1; i <= to.length; ++i) {
    for(let j = 1; j <= from.length; ++j) {
      if(from[j-1] == to[i-1]) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j] + 1,
          matrix[i-1][j-1] + 1,
          matrix[i-1][j-1] + 1);
      }
    }
  }
  return matrix[to.length-1][from.length-1];
}

function test() {
  assert.deepEqual(1, distance("ey", "hey"));
  assert.deepEqual(3, distance("kitten", "sitting"));
}
testing.addTest(test);
