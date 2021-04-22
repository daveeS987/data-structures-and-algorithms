'use strict';

const reverseArray = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start += 1;
    end -= 1;
  }
};

module.exports = reverseArray;
