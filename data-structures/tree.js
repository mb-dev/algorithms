class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      var current = this.root;
      while (true) {
        if (value <= current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = new Node(value);
            return;
          }
          current = current.right;
        }
      }
    }
  }
  addNode(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        if (node.value <= current.value) {
          if (current.left === null) {
            current.left = node;
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = node;
            return;
          }
          current = current.right;
        }
      }
    }
  }
}

module.exports = Tree;
