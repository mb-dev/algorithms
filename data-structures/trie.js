const assert = require('assert');
const testing = require('../testing/testing');

class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map;
  }
}
class Trie {
  constructor() {
    this.root = new Node(false);
  }
  add(str) {
    let node = this.root;
    for (var i = 0; i < str.length; ++i) {
      let nextNode = node.children.get(str[i]);
      if (!nextNode) {
        nextNode = new Node(false);
        node.children.set(str[i], nextNode);
      }
      node = nextNode;
    }
    if (node.value == false) {
      node.value = true;
    }
  }
  exists(str) {
    let node = this.root;
    for (var i = 0; node && i < str.length; ++i) {
      node = node.children.get(str[i]);
    }
    return (node || false) && node.value;
  }
}

function test() {
  let trie = new Trie();
  trie.add('hello');
  assert.equal(trie.exists('hello'), true);
  assert.equal(trie.exists('world'), false);
  assert.equal(trie.exists('hell'), false);
  assert.equal(trie.exists('helloo'), false);
  trie.add('hell');
  assert.equal(trie.exists('he'), false);
  assert.equal(trie.exists('hell'), true);
  assert.equal(trie.exists('hello'), true);
}
testing.addTest(test);
