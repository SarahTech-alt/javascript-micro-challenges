console.log('150-LoopsAndTwooDimensionalArrays');

/**
 * Create a function that takes in an array of arrays. Add up all of the numbers in all of the arrays and return the value.
 * Will need a nested loop
 * First loop will access all of the arrays of the arrays
 * The second loop will access the values in the arrays of the array
 * @param arrayOfArrays
 * @returns sumOfArraysofArrays
 * 
 */

function sumOfArrays(arrayOfArrays) { //takes in an array of arrays
    let sumOfAllArrays = 0; // variable to add results to
    for (let array of arrayOfArrays) { // initializing accessing each array in the array
        for (let i = 0; i < array.length; i++) { //initializing accessing each value in array
            sumOfAllArrays += array[i]; //adding each value to the sumOfAllArrays
        }
    } return sumOfAllArrays; // returns the resulting variable sumOfAllArrays
}

let arrayOfArrays1 = [[1, 2], [3, 4, 5]];
console.log(sumOfArrays('The sum of this array should be 15:', arrayOfArrays1));

let arrayOfArrays2 = [[1, 2], [3, 4, 5], [6]];

console.log('The sum of this array should be 21:', sumOfArrays(arrayOfArrays2));
