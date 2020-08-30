'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const checkValuesMatch = require('../checkValuesMatch.js');

describe('Test if Node works', () => {
  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('It can instantiate a new node', () => {
    let node = new Node('should work');
    let expected = { value: 'should work', next: null };
    expect(node).toEqual(expected);
  });
});

describe('Lab 5 Linked List Test: insert, includes, toString', () => {
  it('It can instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list).toEqual({ head: null });
  });

  let list = new LinkedList();
  list.insert('first insert');
  list.insert('second insert');
  list.insert('third insert');

  it('Can properly insert into the linked list', () => {
    expect(list.head.value).toEqual('third insert');
  });

  it('Head property will point to first node in linked list', () => {
    expect(list.head.value).toEqual('third insert');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let values = ['third insert', 'second insert', 'first insert'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });

  it('Includes method returns true if target exist within linked list', () => {
    let actual = list.includes('second insert');
    expect(actual).toEqual(true);
  });

  it('Includes method will return false if target is not present in linked list', () => {
    let actual = list.includes('not present');
    expect(actual).toEqual(false);
  });

  it('toString method should properly return a collection', () => {
    let actual = list.toString();
    let expected =
      '{ third insert } -> { second insert } -> { first insert } -> null';
    expect(actual).toEqual(expected);
  });
});

describe('Lab 6 Linked List Test: append, insertBefore, insertAfter', () => {
  let list = new LinkedList();

  it('Append will add node to end of linked list', () => {
    list.append('first append');
    let expected = 'first append';
    let current = list.head;
    while(current.next) {
      current = current.next;
    }
    expect(current.value).toEqual(expected);
  });

  it('Can add multiple nodes to the end of a linked list', () => {
    list.append('second append');
    let expected = 'second append';
    let current = list.head;
    while(current.next) {
      current = current.next;
    }
    expect(current.value).toEqual(expected);
  });

  it('InsertBefore method works in the middle of a linked list', () => {
    list.append('third append');
    list.insertBefore('second append', '1.5');
    let values = ['first append', '1.5', 'second append', 'third append'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });
});
