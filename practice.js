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

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(treeNode = null) {
    this.root = treeNode;
  }

  // inOrder, preOrder, postOrder

  // left, node, right
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

  // node, left, right
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


  // left, right, node
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

class BinarySearchTree extends BinaryTree {

  // addIteravily, addRecursviely, containsIteravily, containsRecursively, findMax, Breadthfirst

  add(newValue) {

    let node = new TreeNode(newValue);

    if(!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while(current) {
      if(current.value === newValue) {
        console.log('Value is already present');
        return this;
      }
      if(newValue > current.value) {
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

  addRecursively(newValue) {

    let node = new TreeNode(newValue);

    if(!this.root) {
      this.root = node;
      return this;
    }

    const walk = node => {
      if(node.value === newValue) {
        console.log('Value is already in the tree');
        return;
      }

      if(newValue > node.value) {
        if(!node.right) {
          node.right = node;
          return this;
        }
        walk(node.right);
      } else {
        if(!node.left) {
          node.left = node;
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
      return false;
    }

    let result = false;

    const walk = (node) => {

      if(target === node.value) {
        result = true;
        return;
      } else if (target < node.value) {
        if(!node.left) {return;}
        walk(node.left);
      } else {
        if(!node.right){return;}
        walk(node.right);
      }
    };

    walk(this.root);
    return result;
  }

  findMax() {

    if(!this.root) {
      return null;
    }

    let current = this.root;
    while(current.right) {
      current = current.right;
    }
    return current.value;
  }

  breadthFirst(){

    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);

    while(queue.peek()) {

      let dequed = queue.dequeue();
      result.push(dequed.value);

      if(dequed.left) {queue.enqueue(dequed.left);}
      if(dequed.right) {queue.enqueue(dequed.right);}
    }
    return result;
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
