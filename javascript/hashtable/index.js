'use strict';

const Node = require('./hashtable.js').Node;
const LL = require('./hashtable.js').LL;
const HashTable = require('./hashtable.js').Hashtable;

let hashtable = new HashTable(4000);


console.log(hashtable);

hashtable.add('key', 'value');
hashtable.add('alex', 'johnson');
hashtable.add('alex', 'nations');
hashtable.add('chris', 'rock');
hashtable.add('bob', 'builder');

hashtable.storage.forEach((item, idx) => {
  item.print();
});


hashtable.get('hello');
let result1 = hashtable.contains('key');
let result2 = hashtable.contains('bob');
let result3 = hashtable.get('chris');
let result4 = hashtable.get('hello');
let result5 = hashtable.get('alex');
console.log({result1});
console.log({result2});
console.log({result3});
console.log({result4});
console.log({result5});
