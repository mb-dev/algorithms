var assert = require('assert');
var _ = require('lodash');

// https://www.hackerrank.com/challenges/eval-ex
function e(x) {
  var sum = 1.0;
  var pow = x;
  var fact = 1;
  for (var i of _.range(2, 15)) {
    sum += (pow / fact);
    pow = pow * x;
    fact = fact * i;
  }
  return sum;
}

function test() {
  assert.equal(e(0), 1.0);
  assert(Math.abs(e(1) - 2.718) < 0.1);
  assert(Math.abs(e(2) - 7.38) < 0.1, e(2));
  assert(Math.abs(e(5) - 148.41) < 0.2, e(5));
}

module.exports = {test: true, func: test};
