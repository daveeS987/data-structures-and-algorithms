'use strict';

let leftJoins = require('./left-join.js');

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
console.log(actual);
