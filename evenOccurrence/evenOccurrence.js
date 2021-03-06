// jshint esversion:6
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  let storage = {};
  let multipleEvenOccurrences = {};
  for (let i = 0; i < arr.length; i++) {
    storage[arr[i]] = storage[arr[i]] + 1 || 1;
    if (storage[arr[i]] % 2 === 0) {
      multipleEvenOccurrences[arr[i]] = arr.indexOf(arr[i]);
    } else if (multipleEvenOccurrences[arr[i]] !== undefined) {
      delete multipleEvenOccurrences[arr[i]];
    }
  }
  if (Number(Object.keys(multipleEvenOccurrences).sort((a, b) => {
    
    return multipleEvenOccurrences[a] - multipleEvenOccurrences[b];
  })[0])) {
    return Number(Object.keys(multipleEvenOccurrences).sort((a, b) => {
      return multipleEvenOccurrences[a] - multipleEvenOccurrences[b];
    })[0]);
  } else if (Object.keys(multipleEvenOccurrences).sort((a, b) => {
    return multipleEvenOccurrences[a] - multipleEvenOccurrences[b];
  }).length === 0) {
    return null;
  } else {
    console.log(typeof(Object.keys(multipleEvenOccurrences).sort((a, b) => {
      return multipleEvenOccurrences[a] - multipleEvenOccurrences[b];
    })[0]));
    return (Object.keys(multipleEvenOccurrences).sort((a, b) => {
      return multipleEvenOccurrences[a] - multipleEvenOccurrences[b];
    })[0]);
  }
};
