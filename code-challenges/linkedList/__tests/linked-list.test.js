'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');

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
    let current = list.head;
    let values = ['third insert', 'second insert', 'first insert'];
    let i = 0;
    let allValuesMatch = true;
    while (current.next) {
      if (current.value !== values[i]) {
        allValuesMatch = false;
        break;
      }
      current = current.next;
      i += 1;
    }
    expect(allValuesMatch).toEqual(true);
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
    console.log('list: ', JSON.stringify(list, null, 2));
    let actual = list.toString();
    console.log('actual: ', actual);
    let expected =
      '{ third insert } -> { second insert } -> { first insert } -> null';
    expect(actual).toEqual(expected);
  });
});
