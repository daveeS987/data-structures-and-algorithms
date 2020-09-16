'use strict';

module.exports = (list1, list2) => {
  let l1Temp;
  let l2Temp;
  let l1Current = list1.head;
  let l2Current = list2.head;

  while(l1Current.next) {
    if(!l2Current.next) {
      l2Current.next = l1Current.next;
      l1Current.next = l2Current;
      break;
    }
    l1Temp = l1Current.next;
    l2Temp = l2Current.next;
    l1Current.next = l2Current;
    l2Current.next = l1Temp;

    l1Current = l2Current.next;
    l2Current = l2Temp;
  }
  if(l2Current) {
    l1Current.next = l2Current;
  }
};
