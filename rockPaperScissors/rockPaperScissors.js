// jshint esversion:6
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
let actions = ['R', 'P', 'S'];

var rockPaperScissors = function(num) {
  // TODO: your solution here
    let solutionsArr = [];

    let roundsPlayed = 0;
    let solutionsArrSize = Math.pow(3, num);
    for (let i = 0; i < solutionsArrSize; i++) {
        solutionsArr[i] += actions[(i % 3)];
    }
    for (let j = 0; i < solutionsArrSize / (3 * roundsPlayed); j++) {
        for (let k of actions) {
            // solutionsArr[j * ]
        }
    }
    
};

var pushRecursive = function(term) {
    let sequence = '';

};

