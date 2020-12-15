'use strict';

const Stack = require('./stacks.js');

// let stack = new Stack();
// console.log('first stack:', stack);

// stack.push('first');
// stack.push('second');
// stack.push('third');

// console.log('stack with pushes:', JSON.stringify(stack, null, 2));

// let firstPop = stack.pop();
// console.log('firstPop:', firstPop);

// console.log('stack after pop:', JSON.stringify(stack, null, 2));





/////        Johns Code           /////


let familyStack = new Stack();
familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zach');
familyStack.push('Allie');

console.log('Iterative Traversal');

while (familyStack.peek()) {
  // Process
  let person = familyStack.pop();
  console.log(person);
}


console.log('Recursive ...');
familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zach');
familyStack.push('Allie');

function iterateRecursively(stack) {

  // Base Case
  if (!stack.peek()) { return; }

  // Process
  let person = stack.pop();
  console.log(person);

  // Move the pointer
  iterateRecursively(stack);

}

console.log(iterateRecursively(familyStack));
