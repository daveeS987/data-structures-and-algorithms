'use strict';

const Queue = require('./javascript/queues/queues.js');

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(node=null){
    this.root = node;
  }

  // inOrder - left,node,right
  inOrder() {
    let result = [];
    const walk = node => {
      if(node.left) {walk(node.left);}
      result.push(node.value);
      if(node.right){walk(node.right);}
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

class BinarySearchTree extends BinaryTree {

  // add
  add(value) {

    let node = new TreeNode(value);

    if(!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while(current) {
      if(current.value === value) {
        console.log('Value is already present');
        return null;
      }

      if(value > current.value) {
        if(!current.right) {
          current.right = node;
        } else {
          current = current.right;
        }
      } else {
        if(!current.left) {
          current.left = node;
        } else {
          current = current.left;
        }
      }
    }
    return this;
  }

  // addRecursively, addIteraveily, containsRecursively, containsIteraveily, Breadthfirst

  containsRecursively(value) {

    if(!this.root) {
      return null;
    }

    let result = false;

    const walk = node => {

      if(node.value === value) {
        result = true;
        return;
      }

      if(value > node.value) {
        if(!node.right){
          return;
        } else {
          walk(node.right);
        }
      } else {
        if(!node.left) {
          return;
        } else {
          walk(node.left);
        }
      }

    };

    walk(this.root);
    return result;
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

  breadthFirst() {

    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);

    while(queue.peek) {

      let dequed = queue.dequeue();
      result.push(dequed.value);

      if(dequed.left) {
        queue.enqueue(dequed.left);
      }

      if(dequed.right) {
        queue.enqueue(dequed.left);
      }

    }
    return result;
  }
}
