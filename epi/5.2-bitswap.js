var assert = require('assert');

function setbit(num, i, value) {
  if (value == 1) {
    return num | (1 << i);
  } else {
    return num & ~(1 << i);
  }
}
function shift(bit, amount) {
  if (amount > 0) {
    return bit << amount;
  } else {
    return bit >> Math.abs(amount);
  }
}

function bitswap(num, i, j) {
  var iValue = num & (1 << i);
  var jValue = num & (1 << j);
  num = setbit(num, i, jValue > 0 ? 1 : 0);
  num = setbit(num, j, iValue > 0 ? 1 : 0);
  return num;
}

function test() {
  assert.equal(bitswap(1, 0, 1), 2);
  assert.equal(bitswap(1, 1, 0), 2);
}

module.exports = test;
