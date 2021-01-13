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

    let current = this.front;

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
  constructor(node = null) {
    this.root = node;
  }

  // preOrder, inOrder, postOrder

  // pre: node, left, right
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


  // inOrder: left, node, right
  inOrder() {
    let result = [];
    const walk = node => {
      if(node.left) {walk(node.left);}
      result.push(node.value);
      if(node.right) {walk(node.right);}
    };
    walk(this.root);
    return result;
  }


  // postOrder: left, right, node
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

  // addIteravily, addRecursively, containsIteravily, containsRecursively, getMaxIteravily, getMaxRecursively, BreadthFirst

  addIteravily(value) {

    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while(current) {
      if(value > current.value) {
        if(!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if(!current.left) {
          current.left = newNode;
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
        console.error('This value is already in tree');
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
    return this;
  }

  containsIteravily(target) {

    if(!this.root) {
      return null;
    }

    let current = this.root;
    while(current) {
      if(current.value === target) {
        return true;
      }

      if(target > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  containsRecursively(target) {

    if(!this.root) {
      return null;
    }

    const walk = node => {

      if(node.value === target) {
        return true;
      }

      if(!node) {
        return false;
      }

      if(target > node.value) {
        return walk(node.right);
      } else {
        return walk(node.left);
      }
    };

    return walk(this.root);
  }

  findMaxIteravily() {

    let current = this.root;

    while(current.right) {
      current = current.right;
    }

    return current.value;
  }

  findMaxRecursively() {

    const walk = node => {

      if(!node.right) {
        return node.value;
      }

      return walk(node.right);
    };

    return walk(this.root);
  }

  breadthFirst() {

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
