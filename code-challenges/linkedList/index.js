'use strict';

const LL = require('./linked-list');
let list = new LL();
// let listResults =

list.insert('first');
list.insert('second');
list.insert('third');
list.insert('fourth');
list.insert('fifth');
list.append('last');
// list.insertBefore('second', 'insertThis');
list.insertAfter('fourth', '3.5');


list.toString();
console.log('list at beginning: ', list);
// list.includes('first');
// list.includes('fourth');
// console.log('This was found:', list);



console.log('After insert:', list);
