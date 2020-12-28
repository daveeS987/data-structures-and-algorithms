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

  //insert, append, addBefore, addAfter, contains

  insert(value) {

    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node.next;
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

  addBefore(value, target) {

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
    console.error('Target is not within list');
  }

  addAfter(value, target) {

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

  contains(value) {

    if(!this.head) {
      return null;
    }

    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
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

    let current = this.front;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  dequeue(value) {

    if(!this.front) {
      return null;
    }

    let dequeud = this.front;
    this.front = this.front.next;
    return dequeud.value;
  }

  peek(){

    if(!this.front) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {

    return this.front === null;
  }
}

class Stacks{
  constructor(node = null) {
    this.top = node;
  }

  push(value) {

    let node = new Node(value);

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

  isEmpty() {
    return this.top === null;
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
  constructor(node = null) {
    this.root = node;
  }

  inOrder() {

    let result = [];

    const walk = node => {

      if(node.left) { walk(node.left);}
      result.push(node.value);
      if(node.right) { walk(node.right);}
    };

    walk(this.root);
    return result;
  }

  preOrder() {

    let result = [];

    const walk = node => {

      result.push(node.value);
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
    };

    walk(this.root);
    return result;
  }

  postOrder() {

    let result = [];

    const walk = node => {
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
      result.push(node.value);
    };
    walk(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree{

  addIteravily(value) {

    let node = new TreeNode(value);

    if(!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while(current) {
      if(current.value === value) {
        console.error('Value is already present');
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

  addRecursively(value) {

    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = newNode;
      return this;
    }

    const walk = node => {

      if(node.value === value) {
        console.error('Value is already present');
      }

      if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
          return this;
        }
        walk(node.right);
      } else {
        if(!node.left) {
          node.left = newNode;
          return this;
        }
        walk(node.left);
      }
    };

    walk(this.root);
  }

  containsIteravily(value) {

    if(!this.root) {
      return null;
    }

    let current = this.root;

    while(current) {
      if(current.value === value) {
        return true;
      }

      if(value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }


  containsRecursively(value) {

    if(!this.root) {
      return null;
    }

    const walk = (node) => {

      if(!node) { return false;}
      if(node.value === value) { return true;}

      if(value > node.value) {
        return walk(node.right);
      } else {
        return walk(node.left);
      }
    };

    return walk(this.root);
  }

  findMaxIteravily() {

    if(!this.root) {
      return null;
    }

    let current = this.root;
    while(current.next) {
      current = current.right;
    }
    return current.value;
  }

  findMaxRecursively() {

    if(!this.root) {
      return null;
    }

    const walk = node => {

      if(!node.next) {return node.value;}
      return walk(node.right);
    };

    return walk(this.root);
  }

  breadthFirstSearch() {

    let result = [];
    let breadth = new Queue();
    breadth.enqueue(this.root);

    while(breadth.peek()) {
      let dequed = breadth.dequeue();
      result.push(dequed.value);

      if(dequed.left) {
        breadth.enqueue(dequed.left);
      }

      if(dequed.right) {
        breadth.enqueue(dequed.right);
      }
    }
    return result;
  }
}
