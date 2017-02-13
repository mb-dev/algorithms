var assert = require('assert');
var testing = require('../testing/testing');

// Write a function to rearrange elements in the array, smallest, equal, greater than index i.
// https://github.com/epibook/epibook.github.io/blob/master/solutions/java/src/main/java/com/epi/DutchNationalFlag.java

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function rearrange(arr, i) {
  var pivot = arr[i];
  var left = 0, equal = 0, right = arr.length - 1;

  // equal represents the index where we verified the item is equal or less than pivot
  // left represents the index where we verified the item to be less than pivot
  while(equal <= right) {
    if (arr[equal] < pivot) {
      swap(arr, left++, equal++);
    } else if (arr[equal] == pivot) {
      equal++;
    } else {
      swap(arr, equal, right--);
    }
  }
  return arr;
}

function test() {
  assert.deepEqual(rearrange([1, 2, 3, 4], 2), [1, 2, 3, 4]);
  assert.deepEqual(rearrange([2, 4, 2, 1], 2), [1, 2, 2, 4]);
  assert.deepEqual(rearrange([4, 3, 2, 1], 0), [3, 2, 1, 4]);
  assert.deepEqual(rearrange([2, 4, 2, 2, 1, 2], 3), [1, 2, 2, 2, 2, 4]);
  assert.deepEqual(rearrange([2, 4, 2, 2, 1, 2], 3), [1, 2, 2, 2, 2, 4]);
}
testing.addTest(test);
