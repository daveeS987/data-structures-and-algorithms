'use strict';

/*

This function can be used to help test if actual linked list values equal expected values. Output will be a boolean

check-ll-values-match(linkedList, array) >>>> boolean

will return true if all values match && has same length of values. If not, it will return false

first paramater: linkedList you are testing (actual linkedList you created)

second parameter: an array of values that you expect the linkedList to have

*/


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



