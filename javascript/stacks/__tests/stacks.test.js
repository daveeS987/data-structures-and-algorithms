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
    let stack = new Stacks();
    stack.push('first');
    expect(stack.peek()).toEqual('first');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stacks();
    stack.push('first');
    stack.push('second');
    expect(stack.peek()).toEqual('second');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stacks();
    stack.push('first');
    stack.push('second');
    stack.push('third');

    expect(stack.pop()).toEqual('third');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stacks();
    stack.push('first');
    stack.push('second');
    stack.push('third');

    while(stack.peek()) {
      stack.pop();
    }
    expect('All items succesfully popped').toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {

  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stacks();
    expect(stack.top).toEqual(null);
  });

  it('Calling pop on empty stack raises exception', () => {
    // let spy = jest.spyOn(console, 'error');
    // let stack = new Stacks();
    // stack.pop();
    // expect(spy).toHaveBeenCalled();
    let stack = new Stacks();
    let result = stack.pop();
    expect(result).toBeNull();
  });

  it('Calling peek on empty stack raises exception', () => {
    // let spy = jest.spyOn(console, 'error');
    // let stack = new Stacks();
    // stack.peek();
    // expect(spy).toHaveBeenCalled();
    let stack = new Stacks();
    let result = stack.peek();
    expect(result).toBeNull();
  });

});

