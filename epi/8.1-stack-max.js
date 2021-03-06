var assert = require('assert');
var testing = require('../testing/testing');

// Write a stack with a max function. all operations should take O(1)
// https://github.com/epibook/epibook.github.io/blob/master/solutions/java/src/main/java/com/epi/StackWithMax.java

class StackWithMax {
  constructor(...values) {
    this.stack = [];

    if (values && values.length > 0) {
      for (var i = 0; i < values.length; ++i) {
        this.push(values[i]);
      }
    }
  }
  peek() {
    return this.stack[this.stack.length-1];
  }
  pop() {
    if (this.stack.length == 0)
      return null;
    return this.stack.pop().value;
  }
  push(value) {
    if (value === null)
      return;
    var lastValue = this.peek();
    var max = Math.max(value, lastValue === undefined ? value : lastValue.max)
    this.stack.push({value: value, max: max});
  }
  max() {
    if (this.stack.length == 0)
      return null;
    return this.peek().max;
  }
}



function test() {
  var stack = new StackWithMax(1, 2, 3, 0);
  assert.equal(stack.max(), 3);
  stack.pop();
  assert.equal(stack.max(), 3);
  stack.pop();
  assert.equal(stack.max(), 2);
}
testing.addTest(test);
