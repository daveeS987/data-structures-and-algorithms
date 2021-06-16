class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList{
  constructor(node = null){
    this.head = node;
  }

  // insert, append, insertBefore, insertAFter, contains
  insert(value) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  append(value) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this.head;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  insertBefore(value, target) {

    let node = new Node(value)

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
    while(current.next) {
      if(current.next.value === target) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    console.error('Target is not within list')
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
    console.error('Target not within list')
  }

  contains(target) {

    if(!this.head) {
      return null;
    }

    let current = this.head;
    while(current) {
      if(current.value === target) {
        return true
      }
      current = current.next
    }
    return false;
  }
}

class Stack{
  constructor(node = null){
    this.top = node;
  }

  // push, pop, peek, isEmpty
  push(value) {

    let node = new Node(value);
    node.next = this.front;
    this.front = node;
    return this;
  }

  pop() {

    if(!this.top) {
      return null;
    }

    let popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }

  peek() {

    if(!this.top) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {

    return this.top === null;
  }
}

class Queue{
  constructor(node = null) {
    this.front = node;
  }

  // enqueue, dequeue, peek, isEmpty

  enqueue(value) {

    let node = new Node(value);

    if(!this.front) {
      this.front = node;
      return this;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  dequeue() {

    if(!this.front) {
      return null;
    }

    let dequeud = this.front.value;
    this.front = this.front.next;
    return dequeud;
  }

  peek() {

    if(!this.front) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}
