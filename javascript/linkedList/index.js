'use strict';

const LL = require('./linked-list');
const llZip = require('./ll-zip.js');
let list = new LL();
// console.log('list at beginning:', list);
// list.insert('first');

// console.log('list after first insert:', list);
// list.insert('second');
// list.insert('third');
// list.insert('fourth');
// list.insert('fifth');
// list.includes('first');
// list.append('last');
// list.insertBefore('second', '2.5');
// list.insertAfter('fourth', '3.5');

// list.append(1);
// list.append(2);
// list.append(3);

// let stringVersion = list.toString();
// console.log('stringVersion: ', stringVersion);
// console.log('list: ', JSON.stringify(list, null, 2));

// let k = list.kthFromEnd(6);
// console.log('using kthfrom end: ', k);



// let list1 = new LL();
// let list2 = new LL();

// list1.append(1).append(3).append(5).append(7);
// list2.append(2).append(4).append(6).append(8);

// console.log('list1 before: ', JSON.stringify(list1, null, 2));
// console.log('list2 before: ', JSON.stringify(list2, null, 2));

// llZip(list1, list2);
// console.log('list1: ', JSON.stringify(list1, null, 2));
// console.log('list2: ', JSON.stringify(list2, null, 2));



// ************ Johns code ************** //
list.append('John');
list.append('Cathy');
list.append('Zachary');
list.append('Allie');

// console.log(JSON.stringify(list, undefined, 2));

console.log('Traverse Iteratively');
let current = list.head;
while (current) {
  // do some work
  console.log(current.value);
  // Move our pointer
  current = current.next;
}

console.log('Traverse recursively');

function traverseLinkedListRecursively(node) {
  if (!node) { return; }

  // do our work
  console.log(node.value);

  // Move our pointer
  traverseLinkedListRecursively(node.next);
}

traverseLinkedListRecursively(list.head);


console.log('Traverse Recursively w/return value');

function traverseLinkedListRecursivelyWithReturn(node, biggestOne = '') {
  if (!node) { return biggestOne; }

  // Do Your Work
  if (node.value.length > biggestOne.length) { biggestOne = node.value; }

  return traverseLinkedListRecursivelyWithReturn(node.next, biggestOne);
}

console.log('Longest Name: ', traverseLinkedListRecursivelyWithReturn(list.head));
