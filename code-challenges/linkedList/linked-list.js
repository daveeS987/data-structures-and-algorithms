'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.head;
    node.next = current;
    this.head = node;
    return this;
  }

  includes(searchVal) {
    let current = this.head;
    while (current.next) {
      if (current.value === searchVal) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current.next) {
      string = `${string} { ${current.value} } ->`;
      current = current.next;
    }
    string = `${string} ${null}`;
    console.log(string);
    return this;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insertBefore(target, newVal) {
    let current = this.head;
    let previous;
    while (current.next) {
      if (current.value === target) {
        let node = new Node(newVal);
        node.next = current;
        previous.next = node;
        return this;
      }
      previous = current;
      current = current.next;
    }
    console.error('target value is not within the list');
  }

  insertAfter(target, newVal) {
    let current = this.head;
    while (current.next) {
      if (current.value === target) {
        let node = new Node(newVal);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        return this;
      }
      current = current.next;
    }
    console.error('target value is not within the list');
  }

  kthFromEnd(k) {
    let arr = [];
    let current = this.head;
    while(current.next) {
      arr.push(current.value);
      current = current.next;
    }
    return arr[arr.length-1-k];
  }
}


module.exports = LinkedList;

