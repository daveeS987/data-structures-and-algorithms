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

  includes(searchVal) {
    let current = this.head;
    while(current) {
      if(current.value === searchVal) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while(current !== null) {
        console.log(current.value);
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

  add(key,val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.append([key,val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].append([key,val]);
    }
  }

  get(key) {
    let hash = this.hash(key);
    if(!this.storage[hash]) {
      return undefined;
    }

    let current = this.storage[hash].head;
    while(current) {
      if(current.value[0] === key){
        return current.value[1];
      }
      current = current.next;
    }
    return undefined;
  }

  contains(key) {
    let hash = this.hash(key);
    if(!this.storage[hash]) {
      return false;
    }
    let current = this.storage[hash].head;
    while(current) {
      if(current.value[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = {Node, LL, Hashtable};
