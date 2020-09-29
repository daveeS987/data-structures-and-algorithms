'use strict';

const Queue = require('../queues/queues.js');

class AnimalShelter {

  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog') {
      this.dog.enqueue(animal);
      return;
    } else if(animal.type === 'cat') {
      this.cat.enqueue(animal);
      return;
    } else {
      console.error('ERROR: We can\'t accept this animal');
      return;
    }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      let dequed = this.dog.dequeue();
      return dequed;
    } else if(pref === 'cat') {
      let dequed = this.cat.dequeue();
      return dequed;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;

