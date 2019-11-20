// jshint esversion:6
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, lowerIndex=0, upperIndex=array.length-1) {
    if (upperIndex === lowerIndex && array[upperIndex] !== target) {
        return null;
    }
    let midpoint = Math.floor((lowerIndex + upperIndex) / 2);
    if (array[midpoint] === target) {
        return midpoint;
    } else if (array[midpoint] > target) {
        upperIndex = midpoint - 1;
        return binarySearch(array, target, lowerIndex, upperIndex);
    } else {
        lowerIndex = midpoint + 1;
        return binarySearch(array, target, lowerIndex, upperIndex);
    }
};

// TIME COMPLEXITY: LOG(N) where N is array size