'use strict';

function insertShiftArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      arr.splice(i, 0, target);
      break;
    }
  }
}

module.exports = insertShiftArray;
