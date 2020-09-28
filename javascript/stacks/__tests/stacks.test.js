'use strict';

const Node = require('../../linkedList/node.js');
const Stacks = require('../stacks.js');


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


