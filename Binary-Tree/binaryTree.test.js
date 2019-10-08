"use strict";

const BinaryTree = require("./binaryTree");

describe("binary tree", () => {
  it("can traverse preorder", () => {
    var tree = testTree();
    expect(tree.preOrder()).toEqual(["A", "B", "D", "E", "C", "F"]);
  });
});
describe("it can return the max value in tree", () => {
  it("can return max value in tree", () => {
    var tree = testTree2();
    expect(tree.findMax()).toEqual(90);
  });
});
describe("it can return the max value in tree", () => {
  it("can return max value in a tree that includes negative numbers", () => {
    var tree = testTree3();
    expect(tree.findMax()).toEqual(900);
  });
});

function testTree() {
  var tree = new BinaryTree();
  tree.root = new BinaryTree.Node("A");
  tree.root.left = new BinaryTree.Node("B");
  tree.root.right = new BinaryTree.Node("C");
  tree.root.left.left = new BinaryTree.Node("D");
  tree.root.left.right = new BinaryTree.Node("E");
  tree.root.right.left = new BinaryTree.Node("F");

  return tree;
}
function testTree2() {
  var tree = new BinaryTree();
  tree.root = new BinaryTree.Node(2);
  tree.root.left = new BinaryTree.Node(5);
  tree.root.right = new BinaryTree.Node(1);
  tree.root.left.left = new BinaryTree.Node(7);
  tree.root.left.right = new BinaryTree.Node(90);
  tree.root.right.left = new BinaryTree.Node(3);

  return tree;
}

function testTree3() {
  var tree = new BinaryTree();
  tree.root = new BinaryTree.Node(-4);
  tree.root.left = new BinaryTree.Node(22);
  tree.root.right = new BinaryTree.Node(22);
  tree.root.left.left = new BinaryTree.Node(11);
  tree.root.left.right = new BinaryTree.Node(900);
  tree.root.right.left = new BinaryTree.Node(333);

  return tree;
}
