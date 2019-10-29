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

var getSequences = function(ntimes, arr=actions) {
    let solutionsArr = [];
    if (ntimes === 1) {
        return arr;
    } else {
        for (let j = 0; j < arr.length; j++) {
            for (let k of actions) {
                solutionsArr.push(arr[j] + k);
            }
        }
        solutionsArr = getSequences(ntimes - 1, solutionsArr);
    }
    return solutionsArr;
};
