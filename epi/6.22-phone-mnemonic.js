const assert = require('assert');
const testing = require('../testing/testing');

// http://www.geeksforgeeks.org/find-possible-words-phone-digits/

const table = {
  1: [],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
  0: [],
}

function mnemonic1(num) {
  function calc(num, i) {
    if (i === num.length - 1) {
      return table[num[i]];
    }
    const res = calc(num, i+1);
    const all_res = [];
    const curNum = num[i];
    for (let letter of table[curNum]) {
      for (let r of res) {
        all_res.push(letter + r);
      }
    }
    return all_res;
  }
  return calc(num, 0);
}

function mnemonic2(num) {
  function calc(num, i, prefix) {
    if (i === num.length) {
      return [prefix];
    }
    const curNum = num[i];
    let all_res = [];
    for (let letter of table[curNum]) {
      all_res = all_res.concat(calc(num, i+1, prefix + letter));
    }
    return all_res;
  }
  return calc(num, 0, "");
}

function test() {
  assert.deepEqual([
    "AD", "AE", "AF",
    "BD", "BE", "BF",
    "CD", "CE", "CF",
  ], mnemonic1("23"));
  assert.deepEqual([
    "AD", "AE", "AF",
    "BD", "BE", "BF",
    "CD", "CE", "CF",
  ], mnemonic2("23"));
}
testing.addTest(test);
