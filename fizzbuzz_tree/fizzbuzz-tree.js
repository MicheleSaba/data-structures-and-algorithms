function fizzBuzz(tree) {
  visitNode(tree.root);
  function visitNode(node) {
    if (!node) {
      return;
    }
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = "FizzBuzz";
    } else if (node.value % 3 === 0) {
      node.value = "Fizz";
    } else if (node.value % 5 === 0) {
      node.value = "Buzz";
    }
    visitNode(node.left);
    visitNode(node.right);
  }
}
module.exports = fizzBuzz;
