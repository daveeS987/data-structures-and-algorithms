'use strict';

const PseuodoQueue = require('../queue-with-stacks.js');

describe('Proof of Life', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('PseudoQueue should work', () => {

  it('Should be able to enqueue', () => {
    let pseudoQue = new PseuodoQueue();
    pseudoQue.enqueue('first');
    expect(pseudoQue.stackContainer.top.value).toEqual('first');
  });

  it('Should be able to dequeue', () => {
    let pseudoQue = new PseuodoQueue();
    pseudoQue.enqueue('first');
    pseudoQue.enqueue('second');
    pseudoQue.enqueue('third');
    console.log('pseudoQue line 24', JSON.stringify(pseudoQue, null, 2));

    let dequedItem = pseudoQue.dequeue();
    console.log('dequedItem', JSON.stringify(dequedItem, null, 2));
    expect(dequedItem).toEqual('first');
  });

});
