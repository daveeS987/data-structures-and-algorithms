'use strict';

const LL = require('./linked-list');
let list = new LL();

list.insert('first');
list.insert('second');
list.insert('third');
list.insert('fourth');
list.insert('fifth');
list.append('last');
// list.insertBefore('second', '2.5');
list.insertAfter('fourth', '3.5');


list.toString();
console.log('list: ', list);
// list.includes('first');
// list.includes('fourth');





