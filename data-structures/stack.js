class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length-1];
  }
  pop(value) {
    return this.stack.pop();
  }
  push(value) {
    if (value === null)
      return;
    this.stack.pop(value);
  }
}
