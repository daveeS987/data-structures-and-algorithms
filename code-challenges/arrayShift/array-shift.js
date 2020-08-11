'use strict';

let array1 = [2, 4, 6, 8];
let target1 = 5;

let array2 = [4, 8, 15, 23, 42];
let target2 = 16;

function insertShiftArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      arr.splice(i, 0, target);
      break;
    }
  }
}

insertShiftArray(array1, target1);
console.log('array1: ', array1);

insertShiftArray(array2, target2);
console.log('array2: ', array2);
