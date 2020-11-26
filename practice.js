'use strict';

/*   Methods:

- insert
- includes
- append
- insertbefore
- insertAfter
*/

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  append(value){
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insert(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(searchVal) {

    if(this.head === null) {
      return false;
    }
    let current = this.head;
    while(current) {
      if(current.value === searchVal) {
        return true;
      }
      current = current.next;
    }
    return false;
  }


  insertBefore(target, newVal) {

    let node = new Node(newVal);

    if(this.head === null) {
      this.head = node;
      return;
    }

    if(this.head.value === target) {
      node = this.head.next;
      this.head = node;
      return;
    }

    let current = this.head;
    while(current) {
      if(current.next.value === target) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }
}
