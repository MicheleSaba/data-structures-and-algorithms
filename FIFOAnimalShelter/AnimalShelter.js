'use strict'

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class AnimalShelter {
    constructor() {
        this.head = null;
      }

      enqueue(animal) {
        var node = new Node(animal);
        if (this.head === null) {
          this.head = node;
        } else {
          var current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }

        dequeue(pref) {
            if (!this.head) {
                return;
              }
              else {
                  if (!pref.toLowercase() === 'cat' )


              }
              this.head = this.head.next;
              return this.head;
        };

        print() {
            var list = [this.head.value];
            var current = this.head.next;
            while (current != null) {
              list.push(current.value);
              current = current.next;
            }
            return list;
          };
      }
  } 