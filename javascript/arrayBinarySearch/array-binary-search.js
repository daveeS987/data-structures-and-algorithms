'use strict';

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
