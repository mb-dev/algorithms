var assert = require('assert');
var testing = require('../testing/testing');
var Tree = require('../data-structures/tree');

function dfsInOrder(tree, nodeKeyFunc) {
    if (tree.root === null) {
        return [];
    }
    if (!nodeKeyFunc) {
      nodeKeyFunc = function(node) { return node.key; }
    }
    var nodes = [];
    var pre = [];
    var order = [];
    var node = tree.root;
    while (nodes.length > 0 || node) {
      if (node) {
        pre.push(nodeKeyFunc(node));
        nodes.push(node);
        node = node.left;
      } else {
        node = nodes.pop();
        order.push(nodeKeyFunc(node));
        node = node.right;
      }
    }
    return order;
}

function inOrderWithRecursion(node, cb) {
  if (node.left) {
    inOrderWithRecursion(node.left, cb);
  }
  cb(node)
  if(node.right) {
    inOrderWithRecursion(node.right, cb);
  }
}

function inOrderWithQueue(node, cb) {
  const stack = new Stack();
  const result = [];
  let current = node;
  while (current && stack.length > 0) {
    if (current) {
      stack.add(current);
    }
    if (current && current.left) { 
      current = current.left;
      continue;
    }
    current = stack.pop();
    result.push(current);
    if (current.right) {
      current = current.right;
    }
  }
}

module.exports = {
  dfsInOrder,
  inOrderWithRecursion,
  inOrderWithQueue,
}

function test() {
  const tree = new Tree();
  for (const num of [5, 2, 8, 1, 3]) {
    tree.add(num);
  }
  const results = [];
  inOrderWithRecursion(tree.root, (node) => results.push(node.value));
  assert.deepEqual([1, 2, 3, 5, 8], results);
}
testing.addTest(test);