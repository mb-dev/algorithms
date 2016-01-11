// Simulates a single root LinkedList

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class List {
  constructor(...values) {
    this.root = null;
    this.length = 0;

    if (values && values.length > 0) {
      this.root = new Node(values[0]);
      var current = this.root;
      for (var i = 1; i < values.length; ++i) {
        current.next = new Node(values[i]);
        current = current.next;
      }
      this.length = values.length;
    }
  }
  add(value) {
    if (this.root == null) {
      this.root = new Node(value);
    } else {
      var last = this.root;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = new Node(value);
    }
    this.length += 1;
  }
  get(i) {
    var j = 0;
    var current = this.root;
    while(j < i && current != null) {
      current = current.next;
    }
    return current;
  }
  isEqual(other) {
    if (other == null)
      return false;
    if (this.length != other.length)
      return false;
    return true;
  }
  iterator() {
    return {
      current: this.root,
      next: function() {
        if (this.current == null) {
          return null;
        }
        var item = this.current;
        this.current = this.current.next;
        return item ? item.value : item;
      },
      hasNext: function() {
        return this.current != null;
      }
    }
  }
}

module.exports = List;
