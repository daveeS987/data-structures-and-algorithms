'use strict';

const Stack = require('./stacks.js');

let stack = new Stack();
console.log('first stack:', stack);

stack.push('first');
stack.push('second');
stack.push('third');

console.log('stack with pushes:', JSON.stringify(stack, null, 2));

let firstPop = stack.pop();
console.log('firstPop:', firstPop);

console.log('stack after pop:', JSON.stringify(stack, null, 2));

