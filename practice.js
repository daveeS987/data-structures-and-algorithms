'use strict';

class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// inOrder, preOrder, postPorder

class BinaryTree {
  constructor(node = null){
    this.root = node;
  }


  // left, root, right
  inOrder() {
    let results = [];
    const walk = (node) => {
      if(node.left) {walk(node.left);}
      results.push(node.value);
      if(node.right) {walk(node.right);}
    };
    walk(this.root);
    return results;
  }


  // root, left, right
  preOrder() {
    let results = [];
    const walk = (node) => {
      results.push(node.value);
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
    };
    walk(this.root);
    return results;
  }


  // left, right, root
  postOrder() {
    let results = [];
    const walk = (node) => {
      if(node.left) {walk(node.left);}
      if(node.right) {walk(node.right);}
      results.push(node.value);
    };
    walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {

  /*

  add, contains, findMax, findMin

  */


  add(value) {

    let newNode = new TreeNode(value);

    if(!this.root) {
      this.root = newNode;
      return;
    }

    const walk = (node) => {

      if(value === node.value) {
        console.error('This value is already present');
      }

      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          walk(node.left);
        }
      }
      else if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
        } else {
          walk(node.right);
        }
      }
    };
    walk(this.root);
  }

  // contains(value) {

  //   if(!this.root) {
  //     return false;
  //   }

  //   const walk = (node) => {

  //     if(value === node.value) {
  //       return true;
  //     }

  //     if(value < node.value) {
  //       if(!node.left) {
  //         return false;
  //       }
  //       walk(node.left);
  //     }

  //     if(value > node.value) {
  //       if(!node.right) {
  //         return false;
  //       }
  //       walk(node.right);
  //     }

  //   };
  //   walk(this.root);
  // }

  contains(val) {

    if(!this.root) {
      return false;
    }

    const walk = (node) => {

      if(node.value) 
    }
  }
}
