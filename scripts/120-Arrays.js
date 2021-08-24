console.log('120-Arrays');

/** 
 * Create a function that takes in an array. Add up the first and last numbers of the array.
 * @param array input an array that we will use the values from
 * create a variable that is equal to the first and last values of the array
 * @return the variable
 */

function firstAndLast ( array ) {
    let sumOfFirstAndLast = array[0] + array[array.length-1]; // adds the first and last items of the array
    return sumOfFirstAndLast;
}

let arrayOne = [1,2,3,4,5];
let arrayTwo = [6,7,8,9,10,11,12];

console.log('The sum of the first and last two numbers of arrayOne is:', firstAndLast(arrayOne));

console.log('The sum of the first and last two numbers of arrayTwo is:', firstAndLast(arrayTwo));
