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

    let tree = new BinarySearchTree(twenty);
    let actual = tree.preOrder();
    let expected = [20,12,6,17,32,25,40,70];
    expect(actual).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
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

    let tree = new BinarySearchTree(twenty);
    let actual = tree.inOrder();
    let expected = [6, 12, 17, 20, 25, 32, 40, 70];
    expect(actual).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
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

    let tree = new BinarySearchTree(twenty);
    let actual = tree.postOrder();
    let expected = [6, 17, 12, 25, 70, 40, 32, 20];
    expect(actual).toEqual(expected);
  });
});
