"use strict";

// CHALLENGE 1

// PALIDROME
// Given a string determine whether it is a palidrome
var palidrome = (string) => {
    var sanitazedString = string.toLowerCase().trim();
    return sanitazedString === sanitazedString.split('').reverse().join('');
}
console.log(palidrome('   iyeLLeYI'));




// CHALLENGE 2

//MISSING NUMBERS
//Given an array find the missing numbers and display them
var numereLipsa = (arr) => {
    let missing = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            for (let j = 1; j < arr[i + 1] - arr[i]; j++) {
                //console.log(arr[i], i, arr[j], j);
                missing.push(arr[i] + j);
            }
        }
    }
    return missing;
}
console.log(numereLipsa([0, 2, 5, 9, 11]));
