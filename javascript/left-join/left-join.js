'use strict';

function leftJoins(map1, map2) {

  let result = [];

  map1.forEach((value, key) => {
    let arr = [key, value];
    if(map2.has(key)) {
      arr.push(map2.get(key));
    } else {
      arr.push(null);
    }
    result.push(arr);
  });
  return result;
}

module.exports = leftJoins;
