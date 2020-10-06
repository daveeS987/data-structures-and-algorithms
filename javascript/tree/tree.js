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

class BinarySearchTree extends BinaryTree() {

  add(value) {
    const newNode = new TreeNode(value);
    const _walk = (node) => {
      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
          return newNode;
        }
        _walk(node.left);
      }
      if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
          return newNode;
        }
        _walk(node.right);
      }
    };
    _walk(this.root);
  }


  contains(value) {
    while(this.root) {
      if(this.root === value)
        return true;
      if(value > this.root) {
        this.root = this.right;
      }
      else if(value < this.root) {
        this.root = this.left;
      }
      else{
        return false;
      }
    }
  }


  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.value;
  }


  breadthFirst() {
    let breadth = new Queue();
    breadth.enqueue(this.root);
    let result = [];

    while(breadth.peek()){
      let front = breadth.dequeue();
      result.push(front.value);

      if(front.left !== null) {
        breadth.enqueue(front.left);
      }
      if(front.right !== null) {
        breadth.enqueue(front.right);
      }
    }
    return result;
  }

}

let twenty = new TreeNode(20);
let twelve = new TreeNode(12);
let six = new TreeNode(6);
let seventeen = new TreeNode(17);
let thirtytwo = new TreeNode(32);
let twentyfive = new TreeNode(25);
let fourty = new TreeNode(40);
let seventy = new TreeNode(70);

twenty.left = twelve;
twenty.right = thirtytwo;
twelve.left = six;
twelve.right = seventeen;
thirtytwo.right = fourty;
thirtytwo.left = twentyfive;
fourty.right = seventy;

let tree = new BinaryTree(twenty);
// For a bst ...
// tree.add(20);
// tree.add(12);

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());

// console.log(JSON.stringify(tree, undefined, 4));
