'use strict';

const HashTable = require('./hashtable.js');

let hashtable = new HashTable(4000);

console.log(hashtable);

hashtable.add('key', 'value');
hashtable.add('alex', 'johnson');
hashtable.add('alex', 'nations');
hashtable.add('chris', 'rock');
hashtable.add('bob', 'builder');

console.log(hashtable);
// printing out
hashtable.storage.forEach((item, idx) => {
  if (!this.head) {
    return null;
  } else {
    while (item) {
      console.log(item.value);
      item = item.next;
    }
  }
});

hashtable.get('hello');
let result1 = hashtable.contains('key');
let result2 = hashtable.contains('bob');
let result11 = hashtable.contains('hello');
let result21 = hashtable.contains('billy');

let result3 = hashtable.get('chris');
let result4 = hashtable.get('hello');
let result5 = hashtable.get('alex');

console.log({ result1 });
console.log({ result2 });
console.log({ result3 });
console.log({ result4 });
console.log({ result5 });
console.log({ result11 });
console.log({ result21 });
