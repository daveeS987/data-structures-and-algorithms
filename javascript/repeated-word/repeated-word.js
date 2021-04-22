'use strict';

const HashTable = require('../hashtable/hashtable.js');

function repeatedWord(string) {
  let converted = string.toLowerCase();
  let storage = new HashTable(1000);
  let wordsArr = converted.match(/\w+/g);
  console.log({ wordsArr });

  for (let i = 0; i < wordsArr.length; i++) {
    if (storage.contains(wordsArr[i])) {
      return wordsArr[i];
    } else {
      storage.add(wordsArr[i], wordsArr[i]);
    }
  }
  return undefined;
}

module.exports = repeatedWord;
