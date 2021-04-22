'use strict';

const HashTable = require('../hashtable.js');

describe('Proof of life', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('HashTable should work correctly', () => {
  let hashtable = new HashTable(10);
  hashtable.add('key1', 'value1');
  hashtable.add('alex', 'johnson');
  hashtable.add('chris', 'rock');
  hashtable.add('bob', 'builder');

  let hashTable1 = new HashTable(2);
  hashTable1.add('key1', 'value1');
  hashTable1.add('alex', 'johnson');
  hashTable1.add('chris', 'rock');
  hashTable1.add('bob', 'builder');
  hashTable1.add('ben', 'hill');
  hashTable1.add('chris', 'bortel');

  it('Adding a key/value to hashtable should result in value being in the data structure', () => {
    expect(hashtable.contains('key1')).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    expect(hashtable.get('alex')).toEqual('johnson');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashtable.get('hello')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    expect(hashTable1.contains('key1')).toEqual(true);
    expect(hashTable1.contains('alex')).toEqual(true);
    expect(hashTable1.contains('chris')).toEqual(true);
    expect(hashTable1.contains('bob')).toEqual(true);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashTable1.get('ben')).toEqual('hill');
    expect(hashTable1.get('chris')).toEqual('bortel');
  });

  it('Successfully hash a key to an in-range value', () => {
    let hash1 = hashtable.hash('roger');
    let hash2 = hashtable.hash('a;ldkfja;ldfa');
    let hash3 = hashtable.hash('abcde');

    expect(hash1).toBeGreaterThanOrEqual(0);
    expect(hash1).toBeLessThanOrEqual(10);

    expect(hash2).toBeGreaterThanOrEqual(0);
    expect(hash2).toBeLessThanOrEqual(10);

    expect(hash3).toBeGreaterThanOrEqual(0);
    expect(hash3).toBeLessThanOrEqual(10);
  });
});
