let List = require("./linked-list");
///TEST//
describe.skip("linked list", () => {
  it("Can successfully instantiate an empty linked list", () => {
    let mylist = new List();
    expect(mylist.head).toBe(null);
  });
  it("Can properly insert into the linked list", () => {
    // Arrange
    let mylist = new List();
    // Act
    mylist.insert(4);
    // Assert
    expect(mylist.head.value).toBe(4);
  });
  it("The head property will properly point to the first node in the linked list", () => {
    // Arrange
    let mylist = new List();
    // Act
    mylist.insert(4);
    // Assert
    expect(mylist.head.value).toBe(4);
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    // Arrange
    let mylist = new List();
    // Act
    mylist.insert(2);
    mylist.insert(9);
    // Assert
  });
  it("Will return true when finding a value within the linked list that exists", () => {
    // Arrange
    let mylist = new List();
    mylist.insert(2);
    mylist.insert(9);
    // Act
    // Assert
    expect(mylist.includes(9)).toBe(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    // Arrange
    let mylist = new List();
    mylist.insert(2);
    mylist.insert(9);
    // Act
    // Assert
    expect(mylist.includes(19)).toBe(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    // Arrange
    let mylist = new List();

    // Act
    mylist.insert(2);
    mylist.insert(9);
    // Assert
    expect(mylist.print()).toEqual([2, 9]);
  });
  it("can append", () => {
    let mylist = new List();
    console.log(mylist);
    mylist.append(22);
    mylist.append(3);
    expect(mylist.print()).toEqual([22, 3]);
  });
  it("Can insert before value", () => {
    // Arrange
    let mylist = new List();
    mylist.insert(2);
    mylist.insert(9);
    mylist.insert(7);
    mylist.insertBefore(9, 12);
    expect(mylist.print()).toEqual([2, 12, 9, 7]);
    mylist.insertBefore(2, 1);
    expect(mylist.print()).toEqual([1, 2, 12, 9, 7]);
  });
  it("Can insert after value", () => {
    // Arrange
    let mylist = new List();
    mylist.insert(2);
    mylist.insert(9);
    mylist.insertAfter(2, 12);
    expect(mylist.print()).toEqual([2, 12, 9]);
  });
});
