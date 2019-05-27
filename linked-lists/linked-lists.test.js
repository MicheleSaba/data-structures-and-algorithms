let List = require('./linked-list')
///TEST//
describe('linked list', ()=>{
  it('Can successfully instantiate an empty linked list', ()=> {
   let mylist =  new List();
   console.log(mylist)
    expect(mylist.head).toBe(null);
  });
  it('Can properly insert into the linked list', ()=> {
    // Arrange
    let mylist =  new List();
    // Act
    mylist.insert(4);
    // Assert
    expect(mylist.head.value).toBe(4);
   });
   it('The head property will properly point to the first node in the linked list', ()=> {
    // Arrange
    let mylist =  new List();
    // Act
    mylist.insert(4);
    // Assert
    expect(mylist.head.value).toBe(4);
   });
   it('Can properly insert multiple nodes into the linked list', ()=> {
    // Arrange
    let mylist =  new List();
    // Act
    mylist.insert(2);
    mylist.insert(9);
    // Assert
   });
   it('Will return true when finding a value within the linked list that exists', ()=> {
    // Arrange
    let mylist =  new List();
    mylist.insert(2);
    mylist.insert(9);
    // Act
    // Assert
    expect(mylist.includes(9)).toBe(true);
   });
   it('Will return false when searching for a value in the linked list that does not exist', ()=> {
    // Arrange
    let mylist =  new List();
    mylist.insert(2);
    mylist.insert(9);
    // Act
    // Assert
    expect(mylist.includes(19)).toBe(false);
   });
   it('Can properly return a collection of all the values that exist in the linked list', ()=> {
    // Arrange
    let mylist =  new List();
 
    // Act
    mylist.insert(2);
    mylist.insert(9);
    // Assert
    console.log(mylist.print())
    expect(mylist.print()).toEqual([2,9]);
   });
   
});