'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
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
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += `{ ${current.value} } -> ${null}`;
    return string;
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
    let previous;
    let current = this.head;
    while (current.next) {
      if (current.value === target) {
        if (!previous) {
          this.insert(newVal);
          return this;
        }
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
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    if (current.value === target) {
      this.append(newVal);
      return this;
    }
    console.error('target value is not within the list');
  }

  // kthFromEnd(k) {
  //   let arr = [];
  //   let current = this.head;
  //   while(current.next) {
  //     arr.push(current.value);
  //     current = current.next;
  //   }
  //   return arr[arr.length-1-k];
  // }

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

