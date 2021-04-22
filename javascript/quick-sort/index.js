'use strict';

const quickSort = require('./quick-sort.js');

let arr1 = [8, 4, 23, 42, 16, 15];
let arr2 = [20, 18, 12, 8, 5, -2];
let arr3 = [5, 12, 7, 5, 5, 7];
let arr4 = [2, 3, 5, 7, 13, 11];

quickSort(arr1);
quickSort(arr2);
quickSort(arr3);
quickSort(arr4);

console.log({ arr1 });
console.log({ arr2 });
console.log({ arr3 });
console.log({ arr4 });
