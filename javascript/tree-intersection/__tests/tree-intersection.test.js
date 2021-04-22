'use strict';

const TreeNode = require('../../tree/tree.js').TreeNode;
const BinaryTree = require('../../tree/tree.js').BinaryTree;
const HashTable = require('../../hashtable/hashtable.js');
const treeIntersection = require('../tree-intersection.js');

describe('Proof of life', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('Tree-intersection should work correctlly', () => {
  let onefifty = new TreeNode(150);
  let onehundred = new TreeNode(100);
  let twofifty = new TreeNode(250);
  let seventyfive = new TreeNode(75);
  let onesixty = new TreeNode(160);
  let twohundred = new TreeNode(200);
  let threefifty = new TreeNode(350);
  let onetwentyfive = new TreeNode(125);
  let oneseventyfive = new TreeNode(175);
  let threehundred = new TreeNode(300);
  let fivehundred = new TreeNode(500);

  onefifty.left = onehundred;
  onefifty.right = twofifty;
  onehundred.left = seventyfive;
  onehundred.right = onesixty;
  onesixty.left = onetwentyfive;
  onesixty.right = oneseventyfive;
  twofifty.left = twohundred;
  twofifty.right = threefifty;
  threefifty.left = threehundred;
  threefifty.right = fivehundred;

  let tree1 = new BinaryTree(onefifty);

  let fortyTwo = new TreeNode(42);
  let oneHundred = new TreeNode(100);
  let sixHundred = new TreeNode(600);
  let fifTeen = new TreeNode(15);
  let oneSixty = new TreeNode(160);
  let twoHundred = new TreeNode(200);
  let threeFifty = new TreeNode(350);
  let oneTwentyFive = new TreeNode(125);
  let oneSeventyFive = new TreeNode(175);
  let fouR = new TreeNode(4);
  let fiveHundred = new TreeNode(500);

  fortyTwo.left = oneHundred;
  fortyTwo.right = sixHundred;
  oneHundred.left = fifTeen;
  oneHundred.right = oneSixty;
  sixHundred.left = twoHundred;
  sixHundred.right = threeFifty;
  oneSixty.left = oneTwentyFive;
  oneSixty.right = oneSeventyFive;
  threeFifty.left = fouR;
  threeFifty.right = fiveHundred;

  let tree2 = new BinaryTree(fortyTwo);

  it('Should return similar values from both trees', () => {
    let result = treeIntersection(tree1, tree2);
    let expected = ['100', '160', '125', '175', '200', '350', '500'];
    expect(result).toEqual(expected);
  });
});
