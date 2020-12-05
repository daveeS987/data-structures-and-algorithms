'use strict';

const mergeSort = require('../merge-sort.js');


describe('Proof of life', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('MergeSort should work correctly', () => {
  it('Can sort a numbered array', () => {
    let input = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];
    expect(mergeSort(input)).toEqual(expected);
  });

  it('Can sort a reversed array', () => {
    let input = [20,18,12,8,5,-2];
    let expected = [-2,5,8,12,18,20];
    expect(mergeSort(input)).toEqual(expected);
  });

  it('Can sort an array with few uniques', () => {
    let input = [5,12,7,5,5,7];
    let expected = [5,5,5,7,7,12];
    expect(mergeSort(input)).toEqual(expected);
  });

  it('Can sort an array thats nearly sorted', () => {
    let input = [2,3,5,7,13,11];
    let expected = [2,3,5,7,11,13];
    expect(mergeSort(input)).toEqual(expected);
  });
});
