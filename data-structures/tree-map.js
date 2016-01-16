var assert = require('assert');
var testing = require('../testing/testing');
var treeTraverse = require('../algorithms/tree-traverse');

function validKey(key) {
    return typeof(key) === 'number' || typeof(key) === 'string';
}

function Node(key, value, l, r) {
    this.key = key;
    this.value = value;
    this.r = l || null;
    this.l = r || null;
}

function TreeMap() {
    this.root = null;
    this.size = 0;
}

TreeMap.prototype._find = function(key) {
    if (key === null || key === undefined || !validKey(key)) {
        return null;
    }
    var current = this.root;
    if (!current) {
        return null;
    }
    while (current) {
        if (key < current.key && current.left) {
            current = current.left;
        } else if (key > current.key && current.right) {
            current = current.right
        } else {
            return current;
        }
    }
    return null;
}

TreeMap.prototype.get = function(key) {
    var parentNode = this._find(key);
    if (parentNode === null) {
        return null;
    }
    if (parentNode.key === key) {
        return parentNode.value;
    }
    return null;
}

TreeMap.prototype.length = function() {
    return this.size;
}

TreeMap.prototype.put = function(key, value) {
    if (key === null || key === undefined || !validKey(key)) {
        return;
    }

    if (this.root === null) {
        this.root = new Node(key, value);
        this.size += 1;
    } else {
        var parentNode = this._find(key);
        if (parentNode === null) {
            console.log("something is wrong, we got null when trying to insert", key);
            return;
        }
        if (parentNode.key === key) {
            parentNode.value = value;
        } else if (key < parentNode.key) {
            parentNode.left = new Node(key, value);
            this.size += 1;
        } else {
            parentNode.right = new Node(key, value);
            this.size += 1;
        }
    }
}

function test() {
  var tests = [
    { arr: [4, 2, 6, 1, 3, 5, 7], dfsInOrder: [1, 2, 3, 4, 5, 6, 7] }
  ]

  for (let test of tests) {
    var treeMap = new TreeMap();
    for (let k of test.arr) {
      treeMap.put(k, k.toString());
    }
    assert.deepEqual(treeTraverse.dfsInOrder(treeMap), test.dfsInOrder);
  }
}
testing.addTest(test);

module.exports = TreeMap;
