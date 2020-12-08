'use strict';

let quickSort = require('../quick-sort.js');

describe('QuickSort Method should work correctly', () => {

  it('Should sort an array that is unsorted', () => {
    let arr1 = [8,4,23,42,16,15];
    expect(quickSort(arr1)).toEqual([4,8,15,16,23,42]);
  });

  it('Should account for an array that is reversed', () => {
    let arr2 = [20,18,12,8,5,-2];
    expect(quickSort(arr2)).toEqual([-2,5,8,12,18,20]);
  });

  it('Should account for a few uniques', () => {
    let arr3 = [5,12,7,5,5,7];
    expect(quickSort(arr3)).toEqual([5,5,5,7,7,12]);
  });

  it('Should account for a nearly sorted array', () => {
    let arr4 = [2,3,5,7,13,11];
    expect(quickSort(arr4)).toEqual([2,3,5,7,11,13]);
  });
});
