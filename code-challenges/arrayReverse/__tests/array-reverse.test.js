'use strict';

let reverse= require('../array-reverse.js');

describe('Test reversed array', () => {

  it('Proof of life Test', () => {
    expect(true).toBeTruthy();
  });

  it('Should reverse an array', () => {
    let array1 = [1, 2, 3, 4, 5, 6];
    reverse(array1);
    console.log('array1', array1);
    let expected = [6,5,4,3,2,1];
    expect(array1).toStrictEqual(expected);
  });
});


