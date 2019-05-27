class Node{
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
    }
    else {
      var current = this.head;
      while(current !== null) {
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
   
   while(current != null) {
     if(current.value == value) {
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
   while(current != null) {
    resultList.push(current.value)
    current = current.next;
   }
   return resultList
   }
   }
   
   var testList = new List();
   
   module.exports = List;