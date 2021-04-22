'use strict';

function mergeSort(array) {
  let n = array.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, array);

    return array;
  }
}

function merge(left, right, arr) {
  let l = 0;
  let r = 0;
  let a = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      arr[a] = left[l];
      l++;
    } else {
      arr[a] = right[r];
      r++;
    }
    a++;
  }

  while (l < left.length) {
    arr[a] = left[l];
    a++;
    l++;
  }

  while (r < right.length) {
    arr[a] = right[r];
    a++;
    r++;
  }

  return arr;
}

module.exports = mergeSort;
