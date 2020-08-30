'use strict';

module.exports = (linkedList, array)=> {
  let current = linkedList.head;
  let i = 0;
  let allValuesMatch = true;
  while (current.next) {
    if (current.value !== array[i]) {
      allValuesMatch = false;
      break;
    }
    current = current.next;
    i += 1;
  }
  return allValuesMatch;
};


