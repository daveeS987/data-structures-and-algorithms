'use strict';

const Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList{
  constructor() {
    this.head = null;
  }

  // insert, append, contains, insertBefore, insertAfter
}

const Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); 
  }

  // hash, add, get, contains,

  hash(key){
    return key.split('').reduce((acc,val,i) => {
      return acc + val.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key,val) {

    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]){
      let ll = new LinkedList();
      ll.insert([key,val]);
      this.storage[hashIndex] = ll;
    } else {
      this.storage[hashIndex].insert([key,val]);
    }
  }

  get(key) {
    let hashIndex = this.hash(key);

    if(!this.storage[hashIndex]) {
      return null;
    } else {
      let current = this.storage[hashIndex].head;
      while(current) {
        if(current.value[0] === key) {
          return current.value[1];
        }
        current = current.next;
      }
    }
    return null;
  }

  contains(key) {
    let hashIndex = this.storage(key);

    if(!this.storage[hashIndex]) {
      return false;
    } else {
      let current = this.storage[hashIndex].head;
      while(current) {
        if(current.value[0] === key) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}