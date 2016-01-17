var assert = require('assert');
var testing = require('../testing/testing');

class BitSet {
  constructor() {
    this.bitsPerWord = 32;
    this.bitsToAddressWord = Math.log2(this.bitsPerWord);
    this.store = [];
  }
  wordIndex(pos) {
    return pos >> this.bitsToAddressWord;
  }
  set(pos) {
    // the << operator uses only the low five bits from the pos given.
    this.store[this.wordIndex(pos)] |= (1 << pos);
  }
  get(pos) {
    return (this.store[this.wordIndex(pos)] & (1 << pos)) != 0;
  }
}

function test() {
  var bitset = new BitSet();
  assert.equal(bitset.get(1), false);
  assert.equal(bitset.get(31), false);
  bitset.set(1);
  bitset.set(31);
  assert.equal(bitset.get(1), true);
  assert.equal(bitset.get(31), true);
  for (var i=0; i < 40; ++i) {
    if (i != 1 && i != 31) {
      assert.equal(bitset.get(i), false, i);
    }
  }
}

testing.addTest(test);

module.exports = BitSet;
