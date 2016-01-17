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
  bitset.set(1);
  assert.equal(bitset.get(1), 1);
}

testing.addTest(test);

module.exports = BitSet;
