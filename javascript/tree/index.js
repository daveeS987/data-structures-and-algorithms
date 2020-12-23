let BinarySearchTree = require('./tree.js').BinarySearchTree;
let TreeNode = require('./tree.js').TreeNode;

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


// tree.add(90);

// console.log('contain: ', tree.contains(25));
// console.log('containRecursively: ', tree.containsRecursively(75));

// console.log('preOrder : ', tree.preOrder());
// console.log('inOrder : ', tree.inOrder());
// console.log('postOrder : ', tree.postOrder());

// let breadthFirst = tree.breadthFirst();
// console.log('breadthFirst :', breadthFirst);


console.log('test1: ', tree.containsRecursively(40));

tree.addRecursively(40);

console.log(JSON.stringify(tree, undefined, 2));
/*




/----------------------------- Johns Code ------------------------------/

const tree1 = new BinarySearchTree();

const nodes = [9, 4, 12, 3, 11, 22, 2];
nodes.forEach((number) => tree.addIteravily(number));

// console.log(JSON.stringify(tree, undefined, 2));


/----------------------------------------------------------------------/

function traverseWithHelper(root) {

  const results = [];

  const _walk = (node) => {
    results.push(node.value);
    if (node.left) { _walk(node.left); }
    if (node.right) { _walk(node.right); }
  };

  _walk(root);
  return results;
}

console.log(traverseWithHelper(tree.root));

/----------------------------------------------------------------------/

console.log('Recursive without helper...');

function iterateRecursiveWithoutHelper(node, results = []) {
  results.push(node.value);
  if (node.left) { iterateRecursiveWithoutHelper(node.left, results); }
  if (node.right) { iterateRecursiveWithoutHelper(node.right, results); }
  return results;
}

console.log(iterateRecursiveWithoutHelper(tree.root));

/----------------------------------------------------------------------/

function goWide(tree) {

  let results = [];
  let nodeQueue = [];

  nodeQueue.push(tree.root); // enqueue

  while (nodeQueue.length) { // queue.peek()
    // Process it
    let current = nodeQueue.shift();
    results.push(current.value);

    // Move through the children, accross the tree
    if (current.left) { nodeQueue.push(current.left); }
    if (current.right) { nodeQueue.push(current.right); }
  }

  return results;
}

console.log(goWide(tree));


*/
