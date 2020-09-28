'use strict';

const Stack = require('./stacks.js');

let stack = new Stack();

stack.push('first');
stack.push('second');
stack.push('third');

let firstPop = stack.pop();
console.log('firstPop:', firstPop);

console.log('stack after pop:', JSON.stringify(stack, null, 2));

