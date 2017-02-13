var assert = require('assert');
var testing = require('../testing/testing');

class Queue {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  length() {
    return this.items.length;
  }
  remove() {
    if(this.items.length == 0) {
      return null;
    }
    return this.items.shift();
  }
}

function test() {
  const queue = new Queue();
  queue.add(1); queue.add(2); queue.add(3);
  assert.deepEqual(1, queue.remove());
  assert.deepEqual(2, queue.remove());
  assert.deepEqual(3, queue.remove());
  assert.deepEqual(null, queue.remove());
}
testing.addTest(test);