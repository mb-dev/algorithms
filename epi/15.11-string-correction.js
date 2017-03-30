var assert = require('assert');
var testing = require('../testing/testing');
var Tree = require('../data-structures/tree');
var treeTraverse = require('../algorithms/tree-traverse');

// Does a BST satisfies the BST property?
function isBST(t) {
  let result = true;
  treeTraverse.inOrderWithRecursion(t.root, node => {
    if (node.left && node.left.value > node.value) {
      result = false;
    }
    if (node.right && node.right.value <= node.value) {
      result = false;
    }
  });
  return result;
}

function test() {
  const bst = new Tree();
  for (const val of [5, 2, 8, 1, 3]) {
    bst.add(val);
  }
  assert.deepEqual(true, isBST(bst));
  const nonBST = {
    root: {
      value: 5,
      left: {
        value: 2,
        left: {
          value: 6,
        }
      }
    },
  };
  assert.deepEqual(false, isBST(nonBST));
}
testing.addTest(test);
