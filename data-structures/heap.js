var assert = require('assert');
var testing = require('../testing/testing');

// Heap
// for now only max heap is supported
class Heap {
  constructor(max) {
    max = max || true;
    this.max = max;
    this.arr = [];
  }
  _parent(i) {
    if (i == 0) {
      return null;
    }
    return Math.floor((i-1) / 2);
  }
  _children(i) {
    return [i*2+1, i*2+2];
  }
  _swap(i, j) {
    var temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
  _swim(i) {
    var current = i;
    var parent = this._parent(current);
    while(this.arr[current] > this.arr[parent]) {
      this._swap(current, parent);
      current = parent;
      parent = this._parent(current);
    }
  }
  _sink(i) {
    var current = i;
    var children = this._children(current);
    while (this.arr[i] < this.arr[children[0]] || this.arr[i] < this.arr[children[1]]) {
      if (this.arr[children[0]] > this.arr[children[1]]) {
        this._swap(i, children[0]);
        current = children[0];
      } else {
        this._swap(i, children[1]);
        current = children[1];
      }
      children = this._children(current);
    }
  }
  insert(value) {
    this.arr.push(value);
    this._swim(this.arr.length - 1);
  }
  peek() {
    if (this.arr.length === 0) {
      return null;
    }
    return this.arr[0];
  }
  remove() {
    if (this.arr.length === 0) {
      return null;
    }
    var top = this.peek();
    if (this.arr.length > 1) {
      this.arr[0] = this.arr.pop();
      this._sink(0);
    } else {
      this.arr = [];
    }
    return top;
  }
}

module.exports = Heap;

function test() {
  var heap = new Heap();
  heap.insert(1);
  heap.insert(3);
  heap.insert(2);
  assert.equal(heap.peek(), 3);
  assert.equal(heap.remove(), 3);
  assert.equal(heap.remove(), 2);
  assert.equal(heap.remove(), 1);
  assert.equal(heap.remove(), null);
}
testing.addTest(test);

module.exports = Heap;
