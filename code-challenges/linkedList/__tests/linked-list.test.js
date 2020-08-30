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

describe('CheckValuesMatch helper function should work', () => {
  let list = new LinkedList();
  list.append('first');
  list.append('second');
  list.append('third');
  let correctValues = ['first', 'second', 'third'];
  let inCorrectValues1 = ['bad', 'second', 'third'];
  let inCorrectValues2 = ['first', 'second', 'bad'];
  let inCorrectLength = ['first', 'second', 'third', 'bad'];

  it('Should return true if values match', () => {
    expect(checkValuesMatch(list,correctValues)).toEqual(true);
  });

  it('Should return false if first values do not match', () => {
    expect(checkValuesMatch(list,inCorrectValues1)).toEqual(false);
  });

  it('Should return false if last values do not match', () => {
    expect(checkValuesMatch(list,inCorrectValues2)).toEqual(false);
  });

  it('Should return false if list length and expected array length do not match', () => {
    expect(checkValuesMatch(list,inCorrectLength)).toEqual(false);
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

  it('Can successfully add a node to the end of the linked list', () => {
    list.append('first append');
    let expected = 'first append';
    let current = list.head;
    while(current.next) {
      current = current.next;
    }
    expect(current.value).toEqual(expected);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    list.append('second append');
    let expected = 'second append';
    let current = list.head;
    while(current.next) {
      current = current.next;
    }
    expect(current.value).toEqual(expected);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    list.append('third append');
    list.insertBefore('second append', '1.5');
    let values = ['first append', '1.5', 'second append', 'third append'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    list.insertBefore('first append', '0.5');
    let values = ['0.5', 'first append', '1.5', 'second append', 'third append'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    list.insertAfter('second append', '2.5');
    let values = ['0.5', 'first append', '1.5', 'second append','2.5', 'third append'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });

  it('Can successfully insert a node after the last node of the linked list', ()=> {
    list.insertAfter('third append', 'last');
    let values = ['0.5', 'first append', '1.5', 'second append','2.5', 'third append', 'last'];
    let valuesMatch = checkValuesMatch(list, values);
    expect(valuesMatch).toEqual(true);
  });
});
