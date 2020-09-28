'use strict';

const Node = require('../../linkedList/node.js');
const Stacks = require('../stacks-and-queues.js').Stacks;
const Queues = require('../stacks-and-queues.js').Queues;
const checkValuesMatch = require('../../../helper-test-functions/check-ll-values-match.js');


describe('Proof of life', () => {
  it('It can instantiate a new node', () => {
    let node = new Node('should work');
    let expected = { value: 'should work', next: null };
    expect(node).toEqual(expected);
  });
});

describe('Stacks Module should work correctly', () => {

  it('Can successfully push onto a stack', () => {

  });

  it('Can successfully push multiple values onto a stack', () => {

  });

  it('Can successfully pop off the stack', () => {

  });

  it('Can successfully empty a stack after multiple pops', () => {

  });

  it('Can successfully peek the next item on the stack', () => {

  });

  it('Can successfully instantiate an empty stack', () => {

  });

  it('Calling pop or peek on empty stack raises exception', () => {

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
