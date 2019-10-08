"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

module.exports = Tree;
// Export Node constructor as property of BinaryTree constructor
Tree.Node = Node;
