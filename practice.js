'use strict';

const e = require('express');

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
  insertBefore(target, newVal) {
    let node = new Node(newVal);

    if (!this.head) {
      this.head = node;
      return this;
    }

    if (this.head.value === target) {
      node.next = this.head;
      this.head = node;
      return this;
    }

    let current = this.head;
    let next = this.head.next;

    while (current.next) {
      if (next.value === target) {
        current.next = node;
        node.next = next;
        return this;
      }
      current = current.next;
      next = next.next;
    }
    console.error('target is not within the list');
  }

  //insertAfter
  insertAfter(target, newVal) {
    let node = new Node(newVal);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === target) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    console.error('Target not within the list');
  }
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
  peek() {
    if (!this.front) {
      return null;
    }

    return this.front.value;
  }

  // isEmpty
  isEmpty() {
    return this.front === null;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  // inOrder
  inOrder() {
    let results = [];

    const walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        walk(node.right);
      }
    };

    walk(this.root);
    return results;
  }

  // preOrder: node, left, right
  preOrder() {
    let result = [];

    const walk = (node) => {
      result.push(node.value);
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
    };

    walk(this.root);
    return result;
  }

  // postOrder: left, right, node;
  postOrder() {
    let result = [];

    const walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
      result.push(node.value);
    };

    walk(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  // add
  add(value) {
    let treeNode = new TreeNode(value);

    if (!this.root) {
      this.root = treeNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        if (!current.right) {
          current.right = treeNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = treeNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  addRecursively(value) {
    let treeNode = new TreeNode(value);

    if (!this.root) {
      this.root = treeNode;
      return this;
    }

    const walk = (node) => {
      if (value > node.value) {
        if (!node.right) {
          node.right = treeNode;
          return this;
        }
        return walk(node.right);
      } else {
        if (!node.left) {
          node.left = treeNode;
          return this;
        }
        return walk(node.left);
      }
    };
    return walk(this.root);
  }

  // contains
  contains(target) {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (current.value === target) {
        return true;
      }

      if (target > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  containsRecursively(value) {
    if (!this.root) {
      return null;
    }

    const walk = (node) => {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }

      if (node.value > value) {
        return walk(node.right);
      } else {
        return walk(node.left);
      }
    };

    return walk(this.root);
  }

  // findMax
  findMax() {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  findMaxRecursively() {
    if (!this.root) {
      return null;
    }

    const walk = (node) => {
      if (!node.right) {
        return node.value;
      } else {
        return walk(node.right);
      }
    };

    return walk(this.root);
  }

  // breadth
  breadthFirst() {
    if (!this.root) {
      return null;
    }

    let result = [];
    let breadth = new Queue(this.root);

    while (breadth.peek()) {
      let dequed = breadth.dequeue();
      result.push(dequed.value);

      if (dequed.left) {
        breadth.enqueue(dequed.left);
      }
      if (dequed.right) {
        breadth.enqueue(dequed.right);
      }
    }
    return result;
  }
}
