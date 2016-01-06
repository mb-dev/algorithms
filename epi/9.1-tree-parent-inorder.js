var assert = require('assert');
var Tree = require('./support/tree');

// Write a tree where each Node contains a parent link. Write in order function that uses only O(1) additional space.
//

class Node {
  constructor(value, parent) {
    this.parent = parent;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



function test() {
  var t = new Tree();
  // in progress

}

module.exports = {test: true, func: test};
