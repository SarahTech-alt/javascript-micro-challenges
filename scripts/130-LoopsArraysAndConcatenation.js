console.log('130-LoopsArraysAndConcatenation');

/**
 * Create a function that returns values of an array starting at a particular index
 * @param arrayToReturn this contains an array of strings
 * @param numberToStart index of the array where you want to start returning
 * create a new variable that accesses the indexed position of the array
 * loop through the array starting at the index and stopping at the end of the array, push the values to the new variable
 * return the variable with the array containing the strings
 */

function accessItems ( arrayToReturn, numberToStart ){
    let outputArray = []; // creating empty array to hold output
    for (let i = numberToStart; i < arrayToReturn.length; i++ ){ // starting index at inputted value and going until the end of the array
        let targetedValue = arrayToReturn[i]; // accessing the index of the inputted array and storing in a variable
        outputArray.push( targetedValue ); // add the value to the new array
    } return outputArray; // return the array containing the output
}

let array = ["ASDF", "BLAH", "Oh!", "Hi", "There!"];
console.log('Should return two values:', accessItems(array, 3)); // checking function output

console.log('Should return three values:', accessItems(array, 2)); // checking function output
