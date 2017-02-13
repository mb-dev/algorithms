var assert = require('assert');
var testing = require('../testing/testing');
var Tree = require('../data-structures/tree');

// Write a tree where each Node contains a parent link. Write in order function that uses only O(1) additional space.
// TODO: Finish this assignment

class Node {
  constructor(value, parent) {
    this.parent = parent;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorder(tree) {
  let current = tree.root;
  let wentright = false;
  let result = [];
  while(current !== null) {
    if (current.left !== null) {
      parentright = current;
      current = current.left;
    } else {
      result.push(current.value);
      current = current.parent;
    }
  }
  return result;
}


function test() {
  var t = new Tree();
  //      5
  //    4   7
  //   1   6 8
  const root = new Node(5, null);
  const row1col1 = new Node(4, root);
  const row1col2 = new Node(7, root);
  const row2col1 = new Node(1, row1col1);
  const row2col2 = new Node(6, row1col1);
  const row2col3 = new Node(8, row1col2);
  const nodes = [root, row1col1, row1col2, row2col1, row2col2, row2col3];
  for (const node of nodes) {
    t.addNode(node);
  }

  assert.deepEqual([1, 4, 5, 6, 7, 8], inorder(t));
}
// this file is complete
//testing.addTest(test);
