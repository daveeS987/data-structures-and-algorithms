'use strict';

const LL = require('./javascript/linkedList/linked-list.js');
const Stack = require('./javascript/stacks/stacks.js');
const Queue = require('./javascript/queues/queues.js');

/*

Best use cases are for storing a lot of information because it has an 01 lookup.

Hashmap stores key, value pairs. Methods are hash, get, contains, add.

Getting is O(1) lookup

Javascript has built in Maps

Methods:

set
has
get
delete

.keys
.values
.entries

you can do a forEach  myMap.forEach( (value, key) => {

})

*/


class HashMap{
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  // hash, add, contains, get

  hash(key) {
    return key.split('').reduce((acc, val, idx) => {
      return acc + val.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key,val) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      let ll = new LL();
      ll.insert([key,val]);
      this.storage[hashIndex] = ll;
    } else {
      this.storage[hashIndex].insert([key,val]);
    }

    return this;
  }

  get(key) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      return null;
    } else {
      let current = this.storage[hashIndex].head;
      while(current) {
        if(current.value[0] === key) {
          return current.value[1];
        }
        current = current.next;
      }
    }
    return null;
  }

  contains(key) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      return false;
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


/*
Best use cases of Binary Search Trees is for looking through numbers. Because as it traverses down the tree it rules out half the tree elements on each traverse. So you don't have to look at each element. Each traversal

Methods in BinaryTee

inOrder, preOrder, PostOrder

BST

addIterate, containsIterate, containsRecurse, BreadthFirst


*/


class TreeNode{
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

  inOrder() {

    let result = [];

    const walk = (node) => {

      if(node.left) { walk(node.left);}
      result.push(node.value);
      if(node.right) {walk(node.right);}
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
    };

    walk(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree{

  // add, containsIteratively, containsRecursively, findMax, breadthFirst

  add(value) {
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
}

