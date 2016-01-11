class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      this.root = new Node(value, null);
    } else {
      var current = this.root;
      while (true) {
        if (current.value <= value) {
          if (current.left === null) {
            current.left = new Node(value, current);
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = new Node(value, current);
            return;
          }
          current = current.right;
        }
      }
    }
  }
}

module.exports = Tree;
