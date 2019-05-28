class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class List {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      if (this.head === null) {
        this.head = new Node(value);
      } else {
        var current = this.head;
        while (current !== null) {
          if (current.next == null) {
            current.next = new Node(value);
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
      length++;
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
    }
  }
  var testList = new List();
  
  module.exports = List;
  