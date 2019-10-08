class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var current = this.head;
      while (current !== null) {
        if (current.next == null) {
          current.next = new Node(value);
          this.length++;
          break;
        }

        current = current.next;
      }
    }
  }

  includes(value) {
    var current = this.head;
    var include = false;

    while (current != null) {
      if (current.value == value) {
        include = true;
        break;
      }
      current = current.next;
    }
    return include;
  }

  print() {
    var resultList = [this.head.value];
    var current = this.head.next;
    while (current != null) {
      resultList.push(current.value);
      current = current.next;
    }
    return resultList;
  }
  append(value) {
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
    this.length++;
  }
  insertBefore(value, newvalue) {
    if (this.includes(value)) {
      let current = this.head;
      if (this.head.value === value) {
        var node = new Node(newvalue);
        node.next = current;
        this.head = node;
      } else {
        while (current != null) {
          if (current.next.value == value) {
            var node = new Node(newvalue);
            node.next = current.next;
            current.next = node;
            break;
          }

          current = current.next;
        }
      }
    }
    this.length++;
  }
  insertAfter(value, newvalue) {
    if (this.includes(value)) {
      let current = this.head;
      while (current != null) {
        if (current.value == value) {
          var node = new Node(newvalue);
          node.next = current.next;
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
    this.length++;
  }
  insertAtK(k, value) {
    var node = new Node(value);
    let current = this.head;
    if (this.head === null) {
      this.head = node;
    }
    if (k > this.length || isNaN(k) || k < 0) {
      return this.list;
    }
    if (!isNaN(k) && k > 0) {
      for (let i = 0; i < this.length - k; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }
}
var testList = new List();

module.exports = List;
