// jshint esversion:6
/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


// var quicksort = function(array) {
//     let left = [];
//     let right = [];
//     let midpointIndex = Math.floor((array.length - 1) / 2);
//     let pivot = array[midpointIndex];
//     let sorted = [];

//     for (let i = 0; i < array.length; i++) {
//         if (i !== midpointIndex) {
//             if (array[i] <= pivot) {
//                 left.push(array[i]);
//             } else {
//                 right.push(array[i]);
//             }
//         }
//     }
//     if (left.length === 1) {
//         sorted.push(left[0]);
//     } else if (left.length !== 0) {
//         sorted.concat(quicksort(left));
//     }

//     sorted.push(pivot);

//     if (right.length === 1) {
//         sorted.push(right[0]);
//     } else if (right.length !== 0) {
//         sorted.concat(quicksort(right));
//     }

//     return sorted;

// };

// a = quicksort([1,5,2,4,8,3,-1]);


function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(array, left=0, right=array.length - 1) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right); 
        if (left < index - 1) {
            quicksort(array, left, index - 1);
        }
        if (index < right) { 
            quicksort(array, index, right);
        }
    }
    return array;
}

function swap(array, leftIndex, rightIndex){
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}
