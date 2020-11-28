'use strict';

function leftJoins(hash1, hash2) {

  let result = {};

  hash1.forEach((key, val) => {
       result[key] = [val];
   }

  hash2.forEach((key, val) => {
        if(result[key]) {
             result[key].push(val)
       } 
   });

   return result;

}