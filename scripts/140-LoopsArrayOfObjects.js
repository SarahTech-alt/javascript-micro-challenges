console.log('LoopsArrayOfObjects');

/**
 * create a function that takes in an array of employee objects with property 'yearsOfExperience' and sums all the years of experience 
 * @param array of objects
 * @returns sum of years
 * want to loop through array and add index.yearsOfExperience value
 */

let employeeArray1 = [ //creating an array of employee objects
    { name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 },
];

let employeeArray2 = [ //creating an array of employee objects
    { name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }

];

function addYearsOfExperience(arrayOfEmployees) {
    let totalYears = 0; //creating a variable to add values to
    for (let employees of arrayOfEmployees) {
        totalYears += employees.yearsOfExperience; // acces yearsOfExperience propery and add to totalYears
    }
    return totalYears; //return totalYears
}

console.log('Should log 14:', addYearsOfExperience(employeeArray1));

console.log('Should log 28:', addYearsOfExperience(employeeArray2));