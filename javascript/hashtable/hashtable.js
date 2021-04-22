'use strict';

const LL = require('../linkedList/linked-list.js');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return (
      (key.split('').reduce((acc, cur, i) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }

  add(key, val) {
    let hashIndex = this.hash(key);

    if (!this.storage[hashIndex]) {
      let ll = new LL();
      ll.insert([key, val]);
      this.storage[hashIndex] = ll;
    } else {
      this.storage[hashIndex].insert([key, val]);
    }
  }

  get(key) {
    let hashIndex = this.hash(key);
    if (!this.storage[hashIndex]) {
      return null;
    }

    let current = this.storage[hashIndex].head;
    while (current) {
      if (current.value[0] === key) {
        return current.value[1];
      }
      current = current.next;
    }
    return null;
  }

  contains(key) {
    let hashIndex = this.hash(key);
    if (!this.storage[hashIndex]) {
      return false;
    }

    let current = this.storage[hashIndex].head;
    while (current) {
      if (current.value[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = Hashtable;
