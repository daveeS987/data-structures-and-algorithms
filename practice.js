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

  // append, insert, addbefore, addAfter, contains

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
    } else {
      let current = this.head;
      while(current) {
        if (current.next.value === target) {
          node.next = current.next;
          current.next = node;
          return this;
        }
        current = current.next;
      }
      console.error('Target is not within list');
    }
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



class Stacks{
  constructor(node = null) {
    this.top = node;
  }

  // push, pop, peek, isEmpty

  push(value) {

    let node = new Node(value);

    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {

    if(!this.top) {
      console.error('there is nothing to pop');
    } else {

      let popped = this.top;
      this.top = this.top.next;
      return popped.value;
    }
  }

  peek() {

    if(!this.top) {
      return null;
    } else {
      return this.top.value;
    }
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

    let dequed = this.front;
    this.front = this.front.next;
    return dequed.value;
  }

  peek() {

    if(!this.front) {
      return null;
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}



class HashMap{
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  // hash, set, get, contains

  hash(key) {
    return key.split('').reduce((acc,cur,idx) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      let ll = new LinkedList();
      ll.insert([key,value]);
      this.storage[hashIndex] = ll;
    } else {
      this.storage[hashIndex].insert([key,value]);
    }
  }

  get(key) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      return null;
    }

    let current = this.storage[hashIndex].head;
    while(current) {
      if (current.value[0] === key) {
        return current.value[1];
      }
      current = current.next;
    }
    return null;
  }

  contains(key) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      return null;
    }

    let current = this.storage[hashIndex].head;
    while(current) {
      if(current.value[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
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

  // inOrder: left, node, right;

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

  // preOrder: node, left, right
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

  // postOrder: left, right, node
  postOrder(){

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

  // addIteravily, addRecursively, containsIteraveily, containsRecursively, findMax, BreadthFirst

  addIteravily(value) {

    let treeNode = new TreeNode(value);

    if(!this.root) {
      this.root = treeNode;
      return this;
    }

    let current = this.root;
    while(current) {
      if(value > current.value) {
        if(!current.right) {
          current.right = treeNode;
          return this;
        }
        current = current.right;
      } else {
        if(!current.left) {
          current.left = treeNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  addRecursively(value) {

    let treeNode = new TreeNode(value);

    const walk = node => {

      if(node.value === value) {
        console.error('value is already in the tree');
      }

      if(value > node.value) {
        if(!node.right) {
          node.right = treeNode;
          return this;
        }
        walk(node.right);
      } else {
        if(!node.left) {
          node.left = treeNode;
          return this;
        }
        walk(node.left);
      }
    };
    walk(this.root);
  }

  containsIteravily(value) {

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

    const walk = (node, result=false) => {

      if(!node) {return result;}

      if(node.value === value) {
        result = true;
        return result;
      } else if (value > node.value) {
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

      if(!node.right) {return node.value;}
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
