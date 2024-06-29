"use strict";
//Write a function called formatInput that takes an input which can be either a string or a number. If it's a string, return it in uppercase. If it's a number, return it as a string with a dollar sign prefix.
function formatInput(a) {
    if (typeof a === 'string') {
        return a.toUpperCase();
    }
    if (typeof a === 'number') {
        return (`$${a}`);
    }
    return;
}
console.log(formatInput("apple"));
console.log(formatInput(99));
