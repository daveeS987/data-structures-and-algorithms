'use strict';

const Node = require('../linkedList/node.js');

// Last in First Out
class Stacks {

  constructor () {
    this.top = null;
  }

  push(value) {
    if(this.top === null) {
      this.top = new Node(value);
    } else {
      let originalTop = this.top;
      this.top = new Node(value);
      this.top.next = originalTop;
      return this.top;
    }
  }

  pop() {
    if(this.top === null) {
      throw new Error('THERE IS NOTHING TO POP');
    }
    let poppedItem = this.top;
    this.top = this.top.next;
    return poppedItem;
  }

  peek(){
    if(this.top === null) {
      throw new Error('STACK IS EMPTY');
    }
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}



module.exports = Stacks;
