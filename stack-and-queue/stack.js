class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  pop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }
  print() {
    var result = [this.head.value];
    var current = this.head.next;
    while (current != null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
  peek() {
    if (!this.head) {
      return;
    }
    else {
      return this.head.value;
    }

  }
}
module.exports = Stack;
