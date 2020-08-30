'use strict';

const LL = require('./linked-list');
let list = new LL();

list.insert('first');
list.insert('second');
list.insert('third');
list.insert('fourth');
list.insert('fifth');
// list.includes('first');
// list.append('last');
// list.insertBefore('second', '2.5');
// list.insertAfter('fourth', '3.5');


let stringVersion = list.toString();
console.log('stringVersion: ', stringVersion);
console.log('list: ', JSON.stringify(list, null, 2));

let k = list.kthFromEnd(6);
console.log('using kthfrom end: ', k);
