/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

// function powerSet(str) {
//     var obj = {};
//     for (var i=0;i<str.length; i++){
//        obj[str[i]] = true;
//     }
//     var array = Object.keys(obj);
//     var result = [[]];
//     for (var i = 0; i < array.length; i++){
//        var len = result.length; 
//        for (var x = 0; x < len; x++){
//          result.push(result[x].concat(array[i]))
//        }
//     }
//     // console.log(result);
//     var sorted = result.map(element => element.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)));
//     // console.log(sorted);
//     var strArr = sorted.map(element => element.join(''));
//     // console.log(strArr);
//     return strArr;
// }

function powerSet(str) {
   let obj = {};
   for (let i = 0; i < str.length; i++) {
      obj[str[i]] = true;
   }
   let outputArr = [[]];
   let stringArr = Object.keys(obj);
   for (let i = 0; i < stringArr.length; i++) {
      let len = outputArr.length;
      for (let j = 0; j < len; j++) {
         outputArr.push(outputArr[j].concat(stringArr[i]));
      }
   }
   let sorted = outputArr.map(elem => elem.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)));
   let joined = sorted.map(elem => elem.join(''));
   return joined;
};