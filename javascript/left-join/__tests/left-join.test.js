'use strict';

const leftJoins = require('../left-join.js');

describe('Proof of life', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('Left Join should work correctly', () => {
  it('It should return correct values', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('fond', 'enamored');
    map1.set('wrath', 'anger');
    map1.set('diligent', 'employed');
    map1.set('outfit', 'garb');
    map1.set('guide', 'usher');

    map2.set('fond', 'averse');
    map2.set('wrath', 'delight');
    map2.set('diligent', 'idle');
    map2.set('guide', 'follow');
    map2.set('flow', 'jam');

    let expected = [
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ];

    let actual = leftJoins(map1, map2);
    expect(actual).toEqual(expected);
  });

  it('It should return correct values when no values match', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('fond', 'enamored');
    map1.set('wrath', 'anger');
    map1.set('diligent', 'employed');
    map1.set('outfit', 'garb');
    map1.set('guide', 'usher');

    map2.set('fond1', 'averse');
    map2.set('wrath1', 'delight');
    map2.set('diligent1', 'idle');
    map2.set('guide1', 'follow');
    map2.set('flow1', 'jam');

    let expected = [
      ['fond', 'enamored', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
    ];

    let actual = leftJoins(map1, map2);
    expect(actual).toEqual(expected);
  });

  it('It should return correct when left hashmap is smaller', () => {
    let map1 = new Map();
    let map2 = new Map();

    map1.set('fond', 'enamored');
    map1.set('wrath', 'anger');
    map1.set('diligent', 'employed');
    map1.set('outfit', 'garb');
    map1.set('guide', 'usher');

    map2.set('fond1', 'averse');
    map2.set('wrath1', 'delight');
    map2.set('diligent1', 'idle');
    map2.set('guide1', 'follow');
    map2.set('flow1', 'jam');
    map2.set('diligent3', 'idle');
    map2.set('guide3', 'follow');
    map2.set('flow3', 'jam');

    let expected = [
      ['fond', 'enamored', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
    ];

    let actual = leftJoins(map1, map2);
    expect(actual).toEqual(expected);
  });
});
