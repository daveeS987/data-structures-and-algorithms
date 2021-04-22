'use strict';

const TreeNode = require('../tree/tree.js').TreeNode;
const BinaryTree = require('../tree/tree.js').BinaryTree;

function fizzBuzzTree(tree) {
  let initial = new TreeNode(fzHelper(tree.root.value));
  let resultTree = new BinaryTree(initial);
  let newTreeRoot = resultTree.root;

  const walk = (node) => {
    let previous = newTreeRoot;

    if (node.left) {
      let converted = fzHelper(node.left.value);
      newTreeRoot.left = new TreeNode(converted);
      newTreeRoot = newTreeRoot.left;
      walk(node.left);
    }

    newTreeRoot = previous;

    if (node.right) {
      let converted = fzHelper(node.right.value);
      newTreeRoot.right = new TreeNode(converted);
      newTreeRoot = newTreeRoot.right;
      walk(node.right);
    }
  };

  walk(tree.root);
  return resultTree;
}

function fzHelper(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  }
  if (value % 3 === 0 && !(value % 5 === 0)) {
    return 'Fizz';
  }
  if (!(value % 3 === 0) && value % 5 === 0) {
    return 'Buzz';
  }
  return value.toString();
}

module.exports = { fizzBuzzTree, fzHelper };
