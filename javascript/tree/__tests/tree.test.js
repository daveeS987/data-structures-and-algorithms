'use strict';

const TreeNode = require('../tree.js').TreeNode;
const BinarySearchTree = require('../tree.js').BinarySearchTree;
const Queue = require('../../queues/queues.js');

describe('Proof of life test', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('Binary Search Tree should work correctly', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let twenty = new TreeNode(20);
    let tree = new BinarySearchTree(twenty);
    expect(tree.root.value).toEqual(20);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let twenty = new TreeNode(20);
    let ten = new TreeNode(10);
    let thirty = new TreeNode(30);
    twenty.left = ten;
    twenty.right = thirty;
    expect(twenty.right.value).toEqual(30);
    expect(twenty.left.value).toEqual(10);
  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });
});
