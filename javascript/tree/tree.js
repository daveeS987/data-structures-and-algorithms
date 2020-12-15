'use strict';

let Queue = require('../queues/queues.js');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  // left, root, right
  inOrder() {
    let results = [];
    const walk = (node) => {
      if (node.left) { walk(node.left); }
      results.push(node.value);
      if (node.right) { walk(node.right); }
    };
    walk(this.root);
    return results;
  }

  // root, left, right
  preOrder() {
    let results = [];
    const walk = (node) => {
      results.push(node.value);
      if (node.left) { walk(node.left); }
      if (node.right) { walk(node.right); }
    };
    walk(this.root);
    return results;
  }

  // left, right, root
  postOrder() {
    let results = [];
    const walk = (node) => {
      if (node.left) { walk(node.left); }
      if (node.right) { walk(node.right); }
      results.push(node.value);
    };
    walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {

  addRecursively(value) {

    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = newNode;
      return;
    }

    const walk = (node) => {

      if(value === node.value) {
        console.error('This value is already present');
      }

      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          walk(node.left);
        }
      }
      else if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
        } else {
          walk(node.right);
        }
      }
    };
    walk(this.root);
  }

  addIteravily(value) {
    let node = new TreeNode(value);

    if(!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while(current) {
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


  containsIterate(value) {
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

  contains(target) {

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
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.value;
  }


  // will have O(W) width for space
  breadthFirst() {

    let breadth = new Queue();
    breadth.enqueue(this.root);
    let result = [];

    while(breadth.peek()) {
      let dequeued = breadth.dequeue();
      result.push(dequeued.value);

      if(dequeued.left) {
        breadth.enqueue(dequeued.left);
      }
      if(dequeued.right) {
        breadth.enqueue(dequeued.right);
      }
    }
    return result;
  }
}


module.exports = {TreeNode, BinaryTree, BinarySearchTree};
