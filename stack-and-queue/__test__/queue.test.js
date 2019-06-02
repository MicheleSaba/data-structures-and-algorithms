let Queue = require("../queue.js");

describe("Queue", () => {
  it("can create an empty Queue", () => {
    let newStack = new Queue();
    expect(newStack.head).toBe(null);
  });
  it("Can insert value at the back of the list", () => {
    let newStack = new Queue();
    newStack.enqueue(4);
    expect(newStack.head.value).toBe(4);
  });
  it("deletes the first node", () => {
    let newStack = new Queue();
    newStack.enqueue(4);
    newStack.enqueue(8);
    newStack.enqueue(10);
    newStack.dequeue();
    console.log(newStack.print());
    expect(newStack.print()).toEqual([8, 10]);
  });
  it("returns the first value in a linked list", () => {
    let newStack = new Queue();
    newStack.enqueue(4);
    newStack.enqueue(8);
    newStack.enqueue(10);
    console.log(newStack.print());
    expect(newStack.peek()).toBe(4);
  });
});
