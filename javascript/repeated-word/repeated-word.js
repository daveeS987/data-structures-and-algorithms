'use strict';

// Writing Node, LL, & Hashmap Class just for practice
class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LL {
  constructor(){
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if(this.head === null){
      this.head = node;
    } else {
      let current = this.head;
      while(current) {
        current.next = current;
      }
      current.next = node;
    }
  }
}

class HashMap {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, cur, i) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.append([key,val]);
      this.storage[hash];
    } else {
      this.storage[hash].append([key,val]);
    }
  }

  get(key){
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      return undefined;
    }
    let current = this.storage[hash].head;
    while(current){
      if(current.value[0] === key) {
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

function repeatedWord(string) {

  let storage = new HashMap(1000);
  let wordsArr = string.match(/\w+/g);

  for(let i = 0; i < wordsArr.length; i++) {
    if(storage.contains(wordsArr[i])) {
      return wordsArr[i];
    } else {
      storage.add(wordsArr[i], wordsArr[i]);
    }
  }
  return undefined;
}

module.exports = {Node, LL, HashMap, repeatedWord};
