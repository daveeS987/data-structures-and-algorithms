'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');

describe('Test if Node works', () => {
  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('It can instantiate a new node', () => {
    let node = new Node('should work');
    let expected = {value: 'should work', next: null};
    expect(node).toEqual(expected);
  });
});

describe('Test if Linked List works', () => {
  it('Should insantiate linked list', () => {
    let list = new LinkedList();
    expect(list).toEqual({head: null});
  });

  it('should Insert new node at beginning', () => {
    let list = {
      head = {
        value: 'first node',
        next: null
      }
    }
    list.LinkedList.insert({value: 'new node', next: null})
  })
});
