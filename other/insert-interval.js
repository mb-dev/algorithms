var assert = require('assert');
var testing = require('../testing/testing');

function addInterval(intervals, newInterval) {
  var i = 0;
  var result = [];
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    result.push(intervals[i++]);
  }
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    var ii = intervals[i];
    newInterval = [Math.min(ii[0], newInterval[0]), Math.max(ii[1], newInterval[1])];
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }
  return result;
}

function test() {
  assert.deepEqual(addInterval([[1, 4], [7, 9], [10, 12]], [8, 11]), [[1, 4], [7, 12]]);
}
testing.addTest(test);
