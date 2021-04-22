'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Proof of life', () => {
  it('Proof of Life', () => {
    expect(true).toBeTruthy();
  });
});

describe('AnimalShelter class should work correctly', () => {
  let dog1 = {
    type: 'dog',
    name: 'ben',
  };

  let dog2 = {
    type: 'dog',
    name: 'ryan',
  };

  let cat1 = {
    type: 'cat',
    name: 'diane',
  };

  let cat2 = {
    type: 'cat',
    name: 'sarah',
  };

  it('Enqueue should add correctly', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    expect(animalShelter.dog.peek().name).toEqual(dog1.name);
    expect(animalShelter.cat.peek().name).toEqual(cat1.name);
  });

  it('Dequeue should work correctly', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    let first = animalShelter.dequeue('dog');
    let second = animalShelter.dequeue('cat');

    expect(first.name).toEqual(dog1.name);
    expect(second.name).toEqual(cat1.name);
    expect(animalShelter.dog.peek().name).toEqual(dog2.name);
    expect(animalShelter.cat.peek().name).toEqual(cat2.name);
  });
});
