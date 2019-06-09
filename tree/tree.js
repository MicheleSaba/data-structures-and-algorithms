"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    var result = [];
    preOrderVisit(this.root);
    return result;

    // Recursive helper!
    function preOrderVisit(node) {
      if (!node) return;

      result.push(node.value);

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }

  inOrder() {
//     let result = [];
//     if (!node.left && !node.right) {
//       // falsy check incl undefined/null
//       console.log("leaf: " + node.value);
//       result.push(node.value);
//       return; // omit else parts
//     } // with early returns
//     if (!node.right) {
//       console.log("right is null, val: " + node.value);
//       inOrder(node.left);
//       resultr.push(node.value);
//       return;
//     }
//     if (!node.left) {
//       console.log("left is null, val:" + node.value);
//       result.push(node.value);
//       inOrder(node.right);
//       return;
//     }
//     console.log("no nulls:");
//     inOrder(node.left);
//     result.push(node.value);
//     inOrder(node.right);
//   }
  postOrder() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

module.exports = BinaryTree;

// Export Node constructor as property of BinaryTree constructor
BinaryTree.Node = Node;
