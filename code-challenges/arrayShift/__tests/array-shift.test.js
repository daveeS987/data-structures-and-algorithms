'use strict';

let insertShiftArray = require('../array-shift.js');

describe('Test if element is inserted inside array', () => {

  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('Target is inputed into the middle of the array', () => {
    let array1 = [2, 4, 6, 8];
    let target1 = 5;
    insertShiftArray(array1, target1);
    expect(array1).toStrictEqual([2,4,5,6,8]);
  });

  it('Target is inputed into the middle of the array', () => {
    let array2 = [4, 8, 15, 23, 42];
    let target2 = 16;
    insertShiftArray(array2, target2);
    expect(array2).toStrictEqual([4,8,15,16,23,42]);
  });

});
