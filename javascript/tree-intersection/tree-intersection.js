'use strict';

const HashTable = require('../hashtable/hashtable.js');

function treeIntersection(tree1, tree2) {

  let result = [];
  let hashMap = new HashTable(1000);

  // preOrder node, left, right
  const walk = (node) => {
    let stringified = JSON.stringify(node.value);
    hashMap.add(stringified, stringified);
    if(node.left) {walk(node.left);}
    if(node.right) {walk(node.right);}
  };
  walk(tree1.root);

  const walk2 = (node) => {
    let stringified = JSON.stringify(node.value);
    if(hashMap.contains(stringified)) {
      result.push(stringified);
    }
    if(node.left) {walk2(node.left);}
    if(node.right) {walk2(node.right);}
  };
  walk2(tree2.root);

  return result;
}


module.exports = treeIntersection;
