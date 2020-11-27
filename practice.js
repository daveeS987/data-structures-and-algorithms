'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor(){
    this.front = null;
  }

  // enqueue, dequeue, peek, isEmpty

  enqueue(value) {
    let node = new Node(value);
    if(!this.front) {
      this.front = node;
    } else {
      let current = this.front;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    if(!this.front) {
      console.error('Queue is empty');
    } else {
      let dequeued = this.front;
      this.front = this.front.next;
      return dequeued;
    }
  }

  peek() {
    if(!this.front) {
      console.error('Queue is empty');
    } else {
      return this.front;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}
