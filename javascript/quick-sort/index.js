'use strict';

const quickSort = require('./quick-sort.js');

let arr1 = [8,4,23,42,16,15];
let arr2 = [20,18,12,8,5,-2];
let arr3 = [5,12,7,5,5,7];
let arr4 = [2,3,5,7,13,11];

quickSort(arr1,8,15);
let result2 = quickSort(arr2);
let result3 = quickSort(arr3);
let result4 = quickSort(arr4);

console.log(({arr1}));
console.log({result1});
console.log({result2});
console.log({result3});
console.log({result4});
