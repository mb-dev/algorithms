var assert = require('assert');
var testing = require('../testing/testing');

// Intersection of sorted arrays
// https://github.com/adnanaziz/epicode/blob/master/java/src/main/java/com/epi/IntersectSortedArrays3.java

function intersect(L, M) {
  if (L.length > M.length) {
    [M, L] = [L, M];
  }
  const C = [];
  let mPos = 0;
  for (let i = 0; i < L.length; ++i) {
    // avoid duplicates
    if (C.length > 0 && C[C.length-1] == L[i]) {
      continue;
    }
    while(mPos < M.length) {
      // if it's smaller, keep scanning
      if (L[i] < M[mPos]) {
        break; 
      } else if (L[i] > M[mPos]) { // if it's larger, we didn't find intersection, move to the next letter
        mPos += 1;
      } else { // found an intersection
        C.push(L[i]);
        mPos += 1;
        break;
      }
    }
    if (mPos == M.length) {
      return C;
    }
  }
  return C;
}

function test() {
  assert.deepEqual([1, 2], intersect([1, 2, 2, 4], [1, 2, 5]));
  assert.deepEqual([], intersect([1, 2, 3, 4], [5, 6, 9]));
  assert.deepEqual([1, 2], intersect([1, 1, 1, 2, 2], [1, 1, 1, 1, 1, 2]));
  assert.deepEqual([1, 2], intersect([-2, 1, 1, 1, 2, 2], [-1, 1, 1, 1, 1, 1, 2, 2]));
}
testing.addTest(test);
