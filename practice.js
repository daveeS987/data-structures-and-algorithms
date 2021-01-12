'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(node = null) {
    this.head = node;
  }

  // insert, insertAfter, insertBefore, append, contains

  insert(value) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  append(value) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  insertAfter(value, target) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current) {
      if(current.value === target) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    console.error('Target is not within list');
  }

  insertBefore(value, target) {

    let node = new Node(value);

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
    console.error('Tareget is not within list');
  }

  contains(target) {

    if(!this.head) {
      return null;
    }

    let current = this.head;
    while(current) {
      if(current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

}

class Stack{
  constructor(node = null) {
    this.top = node;
  }

  //push, pop, peek, isEmpty

  push(value) {

    let node = new Node(value);

    node.next = this.top;
    this.top = node;
    return this;
  }
}
