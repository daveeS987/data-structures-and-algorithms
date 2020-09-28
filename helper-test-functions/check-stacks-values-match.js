'use strict';

/*

This function can be used to help test if actual stacks values equal expected values. Output will be a boolean

checkStacksValuesMatch(stacks, array) >>>> boolean

will return true if all values match && has same length of values. If not, it will return false

first paramater: stacks you are testing (actual stacks you created)

second parameter: an array of values that you expect the stacks to have

*/


module.exports = (stacks, array)=> {
  let current = stacks.top;
  let stackCount = 1;
  let i = 0;
  while (current.next) {
    if (current.value !== array[i]) {return false;}
    current = current.next;
    i += 1;
    stackCount +=1;
  }
  if (current.value !== array[i]) {return false;}
  return array.length === stackCount;
};
