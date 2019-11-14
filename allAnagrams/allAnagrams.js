// jshint esversion:6
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * TIME COMPLEXITY: 
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string, index=0, inputArr=[]) {
  // Your code here.
  if (string.length < 2) {
    return [string];
  }
  let outputArr = [];
  if (index === string.length) {
    return inputArr;
  }
  if (index === 0) {
    for (let i = 0; i < string.length; i++) {
      outputArr.push(string[i]);
    }
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if (!inputArr[i].includes(string[j])) {
          outputArr.push(inputArr[i] + string[j]);
        }
      }
    }
  }
  return allAnagrams(string, index + 1, outputArr);
};

// var allAnagrams = function(string, obj={}, inputArr=[]) {
//   let outputArr = [];
//   if (Object.keys(obj).length === 0) {
//     for (let i = 0; i < string.length; i++) {
//       outputArr.push(string[i]);
//     }
//   }
//   for (let i = 0; i < inputArr.length; i++) {
    
//   }
// };