"use strict";

const Tree = require("./tree");
const fizzBuzz = require("./fizzbuzz-tree");

describe("run Fizz Buzz on a binary tree", () => {
  it("should traverse a tree and change the values", () => {
    var tree = new Tree();
    tree.root = new Tree.Node(3);
    tree.root.left = new Tree.Node(77);
    tree.root.right = new Tree.Node(5);
    tree.root.left.left = new Tree.Node(12);
    tree.root.left.right = new Tree.Node(15);
    tree.root.right.left = new Tree.Node(25);
    fizzBuzz(tree);
    expect(tree.root.left.value).toBe(77);
    expect(tree.root.right.value).toBe("Buzz");
  });
});
