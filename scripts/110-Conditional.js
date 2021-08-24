console.log('110-Conditionals'); // validating correct sourcing

/**
 * Create a function that takes in two numbers to compare
 * @param firstNumberToCompare 
 * @param secondNumberToCompare 
 * @returns a string with which number inputted was bigger
 */

function whichIsBigger(firstNumberToCompare, secondNumberToCompare) {
    if (firstNumberToCompare === secondNumberToCompare) {
        return 'The numbers are the same!' // checks if numbers are equal
    } else if (firstNumberToCompare > secondNumberToCompare) { // checks if the first number is bigger than the second
        return 'The first number was bigger!'
    } else { // if neither above condition is true the second number must be bigger
        return 'The second number was bigger!'
    }
}

console.log('Which number is bigger between 3 and 2', whichIsBigger(3, 2)
);

console.log('Which number is bigger between 2 and 7', whichIsBigger(2, 7)
);

console.log('Which number is bigger between 7 and 7', whichIsBigger(7, 7)
);
