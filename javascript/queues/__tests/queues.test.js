'use strict';

const Node = require('../../linkedList/node.js');
const Queues = require('../queues.js');


describe('Proof of life', () => {
  it('It can instantiate a new node', () => {
    let node = new Node('should work');
    let expected = { value: 'should work', next: null };
    expect(node).toEqual(expected);
  });
});


describe('Queues Module should work correctly', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queues();
    queue.enqueue('first');
    expect(queue.peek().value).toEqual('first');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    let firstPeek = queue.peek();
    queue.dequeue();
    let secondPeek = queue.peek();
    expect(firstPeek.value).toEqual('first');
    expect(secondPeek.value).toEqual('second');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    let firstdequeue = queue.dequeue();
    expect(firstdequeue.value).toEqual('first');
    expect(queue.peek().value).toEqual('second');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.peek().value).toEqual('first');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    while(queue.peek()) {
      queue.dequeue();
    }
    expect('All items dequeued').toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queues();
    expect(queue.front).toEqual(null);
  });

  it('Calling dequeue on empty queue raises exception', () => {
    let spy = jest.spyOn(console, 'error');
    let queue = new Queues();
    queue.dequeue();
    expect(spy).toHaveBeenCalled();
  });

  it('Calling peek on empty queue raises exception', () => {
    let spy = jest.spyOn(console, 'error');
    let queue = new Queues();
    queue.peek();
    expect(spy).toHaveBeenCalled();
  });
});
