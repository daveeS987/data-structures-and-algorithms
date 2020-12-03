'use strict';

let insertionSort = require('../insertion-sort.js');

describe('InsertionSort Method should work correctly', () => {

  it('Should sort an array that is unsorted', () => {
    let arr1 = [8,4,23,42,16,15];
    expect(insertionSort(arr1)).toEqual([4,8,15,16,23,42]);
  });

  it('Should account for an array that is reversed', () => {
    let arr2 = [20,18,12,8,5,-2];
    expect(insertionSort(arr2)).toEqual([-2,5,8,12,18,20]);
  });

  it('Should account for a few uniques', () => {
    let arr2 = [5,12,7,5,5,7];
    expect(insertionSort(arr2)).toEqual([5,5,5,7,7,12]);
  });

  it('Should account for a nearly sorted array', () => {
    let arr2 = [2,3,5,7,13,11];
    expect(insertionSort(arr2)).toEqual([2,3,5,7,11,13]);
  });
});
