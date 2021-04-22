'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(node=null){
    this.head = node;
  }

  // append, insert, insertBefore, insertAfter, contains
  append(value){

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

    console.error('Target not within list');
  }

  insertAfter(value, target) {

    let node = new Node(value);

    if(!this.head){
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
    console.error('Target not within list');
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

  // push, pop, peek, isEmpty
  push(value) {

    let node = new Node(value);

    if(!this.top) {
      this.top = node;
      return this;
    }

    node.next = this.top;
    this.top = node;
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

  isEmpty(){
    return this.top === null;
  }
}

class Queue{
  constructor(node=null) {
    this.front = node;
  }

  //enqueue, pop, peek, isEmpty

  enqueue(value) {

    let node = new Node(value);

    if(!this.front) {
      this.front = node;
      return this;
    }

    let current = this.front;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  dequeue(){

    if(!this.front) {
      return null;
    }

    let dequed = this.front.value;
    this.front = this.front.next;
    return dequed;
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

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(node = null){
    this.root = node;
  }

  //left, root, right
  inOrder(){
    let results = [];

    const walk = node => {
      if(node.left) {walk(node.left);}
      results.push(node.value);
      if(node.right) {walk(node.right);}
    };

    walk(this.root);
    return results;
  }

  // node, left, right
  preOrder() {
    let results = [];

    const walk = node => {
      results.push(node.value);
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
    };

    walk(this.root);
    return results;
  }

  // left, right, root
  postOrder() {
    let results = [];

    const walk = node => {
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
      results.push(node.value);
    };
    walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {

  // addIteravily
  addIteravily(value) {

    let node = new TreeNode(value);

    if(!this.root){
      this.root = node;
      return this;
    }

    let current = this.root;
    while(current) {
      if(current.value === value) {
        console.error('Value already exists');
        return this;
      }

      if(value > current.value) {
        if(!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if(!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  // addRecursively
  addRecursively(value) {

    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = newNode;
      return this;
    }

    const walk = node => {

      if(node.value === value) {
        console.error('this value already exist');
        return;
      }

      if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
          return;
        }
        walk(node.right);
      } else {
        if(!node.left) {
          node.left = newNode;
          return;
        }
        walk(node.left);
      }
    };
    walk(this.root);
    return this;
  }


  // containsIteravily

  // containsRecursively
  // findMax
  // findMaxRecursively
  // breadthFirst
}
