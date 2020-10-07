let Queue = require('../queues/queues.js');
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

console.log('contain: ', tree.contains(25));
console.log('containRecursively: ', tree.containsRecursively(75));

console.log('preOrder : ', tree.preOrder());
console.log('inOrder : ', tree.inOrder());
console.log('postOrder : ', tree.postOrder());

console.log(JSON.stringify(tree, undefined, 4));
