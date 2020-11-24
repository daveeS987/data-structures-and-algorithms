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

  preOrder() {
    let results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {

  add(value) {

    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (this.root === value) {
      return;
    }

    const _walk = (node) => {
      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
          return;
        }
        _walk(node.left);
      }
      if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
          return;
        }
        _walk(node.right);
      }
    };
    _walk(this.root);
  }


  contains(value) {
    let current = this.root;
    while(current) {
      if(current.value === value) {
        return true;
      }
      if(value > current.value) {
        current = current.right;
      }
      else if(value < current.value) {
        current = current.left;
      }
    }
    return false;
  }


  containsRecursively(value) {
    let result;
    const _walk = (node) => {
      if(value === node.value) {
        result = true;
        return;
      } else if(value > node.value) {
        if(!node.right) {
          result = false;
          return;
        }
        _walk(node.right);
      } else if (value < node.value) {
        if(!node.left) {
          result = false;
          return;
        }
        _walk(node.left);
      }
    };
    _walk(this.root);
    return result;
  }


  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  // findMaxRecursively() {

  // }

  // will have O(W) width for space
  breadthFirst() {
    let breadth = new Queue();
    breadth.enqueue(this.root);
    let result = [];

    while(breadth.peek()){
      let front = breadth.dequeue();
      result.push(front);

      if(front.left) {
        breadth.enqueue(front.left);
      }
      if(front.right) {
        breadth.enqueue(front.right);
      }
    }
    return result;
  }
}


module.exports = {TreeNode, BinaryTree,BinarySearchTree};
