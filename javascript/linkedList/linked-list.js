'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }


  insert(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
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


  includes(searchVal) {
    if(!this.head) {
      return false;
    }
    let current = this.head;
    while (current) {
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
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    return string += 'null';
  }


  insertBefore(target, newVal) {

    let node = new Node(newVal);

    if(!this.head) {
      this.head = node;
      return this;
    }

    if(this.head.value === target) {
      node.next = this.head;
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current) {
      if(current.next.value === target) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    console.error('target is not within the list');
  }

  insertAfter(target, newVal) {

    let node = new Node(newVal);
    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current) {
      if(current.value === target){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    console.error('target is not within list');
  }


  kthFromEnd(k){
    if(k < 0) {
      console.error('K is a negative number');
      return undefined;
    }
    let listLength = 1;
    let current = this.head;
    while(current.next) {
      listLength+=1;
      current = current.next;
    }
    if (k > listLength) {
      console.error('K is longer than list');
      return undefined;
    }
    let target = listLength - k;
    let secondCount = 1;
    current = this.head;
    while(secondCount < target) {
      current = current.next;
      secondCount+=1;
    }
    return current.value;
  }
}


module.exports = LinkedList;

