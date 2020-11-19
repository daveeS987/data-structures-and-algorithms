'use strict';

// I'm writing Node and LL just to get extra practice
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while(current !== null) {
        console.log(current);
        current = current.next;
      }
    }
  }
}

class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, cur, i) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 117 % this.size;
  }

  set(key,val) {

  }

}

module.exports = {Node, LL, Hashtable};
