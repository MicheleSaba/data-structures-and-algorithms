"use strict";

function bracketsCheck(str) {
  var openingBrackets = ["(", "{", "["];
  var closingBrackets = [")", "}", "]"];
  let newStack = new Stack();
  let openingBracketsArray = str
    .split("")
    .filter(item => openingBrackets.includes(item));
  let closingBracketsArray = str
    .split("")
    .filter(item => closingBrackets.includes(item));

  console.log(openingBracketsArray);
  console.log(closingBracketsArray);
  if (!openingBracketsArray.length || !closingBracketsArray.length) {
    return false;
  }
  for (var i = 0; i < openingBracketsArray.length; i++) {
    newStack.push(openingBracketsArray[i]);
  }
  for (var i = 0; i < closingBracketsArray.length; i++) {
    if (
      closingBracketsArray[i] ===
      closingBrackets[openingBrackets.indexOf(newStack.peek())]
    ) {
      newStack.pop();
    } else {
      return false;
    }
  }
  if (newStack.head) return false;
  else return true;
  console.log(newStack);
}
