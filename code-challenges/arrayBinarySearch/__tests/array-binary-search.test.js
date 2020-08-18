'use strict';

let search = require('../array-binary-search.js');

describe('Test binary search', () => {

  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('Should return the target index given a target thats present within the array', () => {

    let array = [1, 3, 5, 7, 11, 13, 17, 19];
    let target = 13;
    expect(search(array, target)).toStrictEqual(5);
  });

  it('Should return -1 if target is not within the array', () => {
    let array = [1,2,3,4,5,6,7,8,9,10];
    let target = 12;
    expect(search(array, target)).toStrictEqual(-1);
  });
});
