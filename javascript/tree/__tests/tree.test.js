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

describe('Challenge 15: add() and contain() should work correctly', () => {

  let twenty = new TreeNode(20);
  let tree = new BinarySearchTree(twenty);
  tree.add(6);
  tree.add(12);
  tree.add(17);
  tree.add(25);
  tree.add(32);
  tree.add(40);
  tree.add(70);

  it('add() method should work', () => {
    tree.add(90);
    tree.add(42);
    let inOrder = tree.inOrder();
    let expected = [6, 12, 17, 20, 25, 32, 40, 42, 70, 90];
    expect(inOrder).toEqual(expected);
  });

  it('contain() should pass if value is the first node', () => {
    let actual = tree.contains(20);
    expect(actual).toEqual(true);
  });

  it('contain() should pass if value is somewhere in the middle', () => {
    let actual = tree.contains(32);
    expect(actual).toEqual(true);
  });

  it('contain() should pass if value is the last node', () => {
    let actual = tree.contains(70);
    expect(actual).toEqual(true);
  });

  it('contain() should return false if target is less than any value in the tree', () => {
    let actual = tree.contains(1);
    expect(actual).toEqual(false);
  });

  it('contain() should return false if target is greater than any node value', () => {
    let actual = tree.contains(100);
    expect(actual).toEqual(false);
  });

  it('contain() should return false if target is not present', () => {
    let actual = tree.contains(22);
    expect(actual).toEqual(false);
  });
});


describe('iterative-contains method should work correctly', () => {
  let twenty = new TreeNode(20);
  let tree = new BinarySearchTree(twenty);
  tree.add(6);
  tree.add(12);
  tree.add(17);
  tree.add(25);
  tree.add(32);
  tree.add(40);
  tree.add(70);

  it('containsIterate() should pass if value is the first node', () => {
    let actual = tree.containsIterate(20);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should pass if value is somewhere in the middle', () => {
    let actual = tree.containsIterate(32);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should pass if value is the last node', () => {
    let actual = tree.containsIterate(70);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should return false if target is less than any value in the tree', () => {
    let actual = tree.containsIterate(1);
    expect(actual).toEqual(false);
  });

  it('containsIterate() should return false if target is greater than any node value', () => {
    let actual = tree.containsIterate(100);
    expect(actual).toEqual(false);
  });

  it('containsIterate() should return false if target is not present', () => {
    let actual = tree.containsIterate(22);
    expect(actual).toEqual(false);
  });
});


describe('Challenge 16: Find Max Value', () => {
  it('Should find the maximum value', () => {
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
    let actual = tree.findMax();
    expect(actual).toEqual(70);
  });
});


describe('Challenge 17: Breadth-first Traversal', () => {
  it('Should list out the correct order', () => {

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
    let actual = tree.breadthFirst();
    let expected = [20, 12, 32, 6, 17, 25, 40, 70];

    expect(actual).toEqual(expected);
  });
});
