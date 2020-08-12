'use strict';

let insertShiftArray = require('../array-shift.js');

let array1 = [2, 4, 6, 8];
let target1 = 5;

let array2 = [4, 8, 15, 23, 42];
let target2 = 16;

insertShiftArray(array1, target1);
console.log('array1: ', array1);

insertShiftArray(array2, target2);
console.log('array2: ', array2);
