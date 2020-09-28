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

  });

  it('Can successfully enqueue multiple values into a queue', () => {

  });

  it('Can successfully dequeue out of a queue the expected value', () => {

  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

  });

  it('Can successfully empty a queue after multiple dequeues', () => {

  });

  it('Can successfully instantiate an empty queue', () => {

  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

  });
});
