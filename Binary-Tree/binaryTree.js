"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    var result = [];
    preOrderVisit(this.root);
    return result;
    function preOrderVisit(node) {
      if (!node) return;
      result.push(node.value);
      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }
  inOrder() {
    var result = [];
    inOrderVisit(this.root);
    return result;
    function inOrderVisit(node) {
      if (!node) return;
      inOrderVisit(node.left);
      result.push(node.value);
      inOrderVisit(node.right);
    }
  }
  postOrder() {
    var result = [];
    postOrderVisit(this.root);
    return result;
    function postOrderVisit(node) {
      if (!node) return;
      postOrderVisit(node.left);
      postOrderVisit(node.right);
      result.push(node.value);
    }
  }
  findMax() {
    let max;
    max = 0;
    preOrderVisit(this.root);
    if (this.root.value > max) {
      max = this.root.value;
    }
    return max;
    function preOrderVisit(node) {
      if (!node) return;
      if (node.value > max) {
        max = node.value;
      }
      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

module.exports = BinaryTree;
BinaryTree.Node = Node;
