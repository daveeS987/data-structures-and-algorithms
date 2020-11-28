'use strict';

const Queue = require('./javascript/queues/queues.js');

class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  // inOrder > left, root, right
  inOrder(){
    let result = [];
    const walk = (node) {
      if(node.left) {walk(node.left)};
      result.push(node.value);
      if(node.right) {walk(node.right)};
    }
    walk(this.root);
    return result;
  }


  // preOrder > root, left, right
  preOrder() {
    let result = [];
    const walk = (node) => {
      result.push(node.value);
      if(node.left) {walk(node.left)};
      if(node.right) {walk(node.right)}
    }
    walk(this.root);
    return result;
  }


  // postOrder > left, right, root
  postOrder() {
    let result = [];
    const walk = (node) => {
      if(node.left) {walk(node.left)};
      if(node.right) {walk(node.right)};
      result.push(node.value);
    }
    walk(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree{

  //add , iteraContains, recurseContains, findMax, BreadthFirst

  add(value) {
    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = node;
      return this;
    } 

    const walk = (node) => {

      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          walk(node.left);
        }
      } else {
        if(!node.right) {
          node.right = newNode;
        } else {
          walk(node.right);
        }
      }
    }
    walk(this.root);
    return this;
  }

  containsIterate(target) {
    let current = this.root;
    while(current) {
      if(target === current.value) {
        return true;
      }
      if(target < current.value) {
        current = current.left;
      } else {
        current = current.right;
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
        walk(node.left);
      } else {
        walk(node.right);
      }
    }
    walk(this.root);
    return result;
  }

  findMax() {
    if(!this.root) {
      console.error('Tree is empty');
    } else {
      let current = this.root;
      while(current) {
        current = current.right;
      }
      return current.value;
    }
  }

  breadthFirst() {

    let result = [];
    let breadth = new Queue();
    breadth.enqueue(this.root);

    while(!breadth.isEmpty()) {
      let dequeuedItem = breadth.dequeue();
      result.push(dequeuedItem.value);
      if(dequeuedItem.left) {
        breadth.enqueue(dequeuedItem.left);
      }
      if(dequeuedItem.right) {
        breadth.enqueue(dequeuedItem.right);
      }
    }
    return result;
  }
}