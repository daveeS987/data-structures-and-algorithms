'use strict';

function quickSort(arr, left, right) {

  if(left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position-=1);
    quickSort(arr, position+=1, right);
  }
}

function partition(arr, left, right) {

  let pivot = arr[right];
  let low = left - 1;

  for(let i=left; i < right; i++) {
    if(arr[i] <= pivot){
      low++;
      swap(arr,i,low);
    }
  }

  swap(arr, right, low+=1);

  return low + 1;

}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}


let arr1 = [8,4,23,42,16,15];
let arr2 = [20,18,12,8,5,-2];
let arr3 = [5,12,7,5,5,7];
let arr4 = [2,3,5,7,13,11];

let result1 = quickSort(arr1);
let result2 = quickSort(arr2);
let result3 = quickSort(arr3);
let result4 = quickSort(arr4);

console.log({result1});
console.log({result2});
console.log({result3});
console.log({result4});


module.exports = quickSort;
