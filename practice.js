'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  //insert
  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  //append
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  //includes
  includes(searchVal) {
    if (!this.head) {
      return null;
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

  //insertBefore

  //insertAfter
}
