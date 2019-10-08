class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  dequeue() {
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
    } else {
      return this.head.value;
    }
  }
}
module.exports = Queue;
