"use strict";
//Write a function called findMax that takes an array of numbers and returns the maximum value in the array.
function findMax(a) {
    if (a.length == 0) {
        throw new Error("Empty array");
    }
    let big = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > big) {
            big = a[i];
        }
    }
    return big;
}
let nullnumbers = [];
let numbers = [1, 2, 3, 4];
let max = findMax(numbers);
console.log(max);
try {
    console.log(findMax(nullnumbers));
}
catch (error) {
    //type assertion
    const e = error;
    console.log("Error:", e.message);
}
