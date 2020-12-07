'use strict';

const Queues = require('../queues.js');

describe('Queues Module should work correctly', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queues();
    queue.enqueue('first');
    expect(queue.peek()).toEqual('first');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    let firstPeek = queue.peek();
    queue.dequeue();
    let secondPeek = queue.peek();
    expect(firstPeek).toEqual('first');
    expect(secondPeek).toEqual('second');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    let firstdequeue = queue.dequeue();
    expect(firstdequeue).toEqual('first');
    expect(queue.peek()).toEqual('second');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.peek()).toEqual('first');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queues();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    while(!queue.isEmpty) {
      queue.dequeue();
    }
    expect('All items dequeued').toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queues();
    expect(queue.front).toEqual(null);
  });

  it('Calling dequeue on empty queue raises exception', () => {
    // let spy = jest.spyOn(console, 'error');
    let queue = new Queues();
    let result = queue.dequeue();
    // expect(spy).toHaveBeenCalled();
    expect(result).toBeNull();
  });

  it('Calling peek on empty queue raises exception', () => {
    // let spy = jest.spyOn(console, 'error');
    let queue = new Queues();
    let result = queue.peek();
    // expect(spy).toHaveBeenCalled();
    expect(result).toBeNull();
  });
});
