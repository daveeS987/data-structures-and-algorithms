'use strict';

const mergeSort = require('./merge-sort.js');

let arr1 = [8, 4, 23, 42, 16, 15];
let arr2 = [20, 18, 12, 8, 5, -2];
let arr3 = [5, 12, 7, 5, 5, 7];
let arr4 = [2, 3, 5, 7, 13, 11];

mergeSort(arr1);
mergeSort(arr2);
mergeSort(arr3);
mergeSort(arr4);

console.log({ arr1 });
console.log({ arr2 });
console.log({ arr3 });
console.log({ arr4 });
