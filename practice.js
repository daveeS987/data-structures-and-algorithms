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

class Stack {
  constructor(node = null) {
    this.top = node;
  }

  //push
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    return this;
  }

  pop(value) {
    if (!this.top) {
      return null;
    }

    let popped = this.top;
    this.top = this.top.next;
    return popped.value;
  }

  peek() {
    if (!this.top) {
      return null;
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor(node = null) {
    this.front = node;
  }

  // Enqueue
  enqueue(value) {
    let node = new Node(value);

    if (!this.front) {
      this.front = node;
      return this;
    }

    let current = this.front;
    while (!current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  // Dequeue
  dequeue() {
    if (!this.front) {
      return null;
    }

    let dequed = this.front;
    this.front = this.front.next;
    return dequed.value;
  }

  // peek

  // isEmpty
}
