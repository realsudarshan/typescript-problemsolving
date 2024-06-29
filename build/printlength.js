"use strict";
//Write a function called printLength that takes either a string or an array and prints its length. Use type assertions to handle both types.
function printLength(a) {
    if (typeof a === 'string') {
        return a.length;
    }
    else {
        return a.length;
    }
}
console.log(printLength("Shyam"));
console.log(printLength(["ram", "shyam", "hari"]));
