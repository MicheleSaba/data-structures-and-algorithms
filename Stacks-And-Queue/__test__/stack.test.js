let Stack = require("../stack.js");

describe.skip("Stack", () => {
  it("can create an empty stack", () => {
    let newStack = new Stack();
    expect(newStack.head).toBe(null);
  });
  it("Can insert value at the front of the list", () => {
    let newStack = new Stack();
    newStack.push(4);
    expect(newStack.head.value).toBe(4);
  });
  it("deletes the first node in the singly linked-list", () => {
    let newStack = new Stack();
    newStack.push(4);
    newStack.push(8);
    newStack.push(10);
    newStack.pop();
    console.log(newStack.print());
    expect(newStack.print()).toEqual([8, 4]);
  });
  it("shows returns the first value in a linked list", () => {
    let newStack = new Stack();
    newStack.push(4);
    newStack.push(8);
    newStack.push(10);
    console.log(newStack.print());
    expect(newStack.peek()).toBe(10);
  });
});
