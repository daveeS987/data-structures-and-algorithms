'use strict';

module.exports = (linkedList, array)=> {
  let current = linkedList.head;
  let listCount = 1;
  let i = 0;
  while (current.next) {
    if (current.value !== array[i]) {return false;}
    current = current.next;
    i += 1;
    listCount +=1;
  }
  if (current.value !== array[i]) {return false;}
  return array.length === listCount;
};



