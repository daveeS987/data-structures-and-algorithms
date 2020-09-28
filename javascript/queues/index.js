'use strict';

const Queues = require('./queues.js');

let queue = new Queues();

queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');

let firstDequeue = queue.dequeue();
console.log('firstDequeue', firstDequeue);

console.log('queue after dequeue:', JSON.stringify(queue, null, 2));
