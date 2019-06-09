"use strict";

const BinaryTree = require("./tree");

describe("binary tree", () => {
  it("can traverse preorder", () => {
    var tree = testTree();
    expect(tree.preOrder()).toEqual(["A", "B", "D", "E", "C", "F"]);
  });
  it("can traverse inorder", () => {
    var tree2 = testTree();
    expect(tree2.inOrder()).toEqual([]);
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
