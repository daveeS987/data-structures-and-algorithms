'use strict';

const LL = require('./javascript/linkedList/linked-list.js');

class HashTable{
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  // hash, add, get, contains

  hash(key) {
    return key.split('').reduce((acc, val, i) => {
      return acc + val.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key,value) {
    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      let newLL = new LL();
      newLL.insert([key,value]);
      this.storage[hashIndex] = newLL;
    } else {
      this.storage[hashIndex].insert([key,value]);
    }
  }

  contains(key) {
    let hashedIndex = this.hash(key);

    if(!this.storage[hashedIndex]) {
      return false;
    }

    let current = this.storage[hashedIndex].head;
    while(current) {
      if(current.value[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(key) {
    let hashedIndex = this.hash(key);

    if(!this.storage[hashedIndex]) {
      return null;
    }

    let current = this.storage[hashedIndex].head;
    while(current) {
      if(current.value[0] === key) {
        return current.value[1];
      }
      current = current.next;
    }
    return null;
  }
}
