"use strict";

// CHALLENGE 1

// PALIDROME
// Given a string determine whether it is a palidrome
var palidrome = (string) => {
    var sanitazedString = string.toLowerCase().trim();
    return sanitazedString === sanitazedString.split('').reverse().join('');
}
console.log('palidrome', palidrome('   iyeLLeYI'));




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
console.log('numere lipsa', numereLipsa([0, 2, 5, 9, 11]));



// CHALLENGE 3

//Count occurences in an array
var frecventa = (arr) => {
    //first solution
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        //console.log(i, num, count);
        count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
    }

    //second solution
    // return arr.reduce((acc, elem) => {
    //     console.log(val, elem, acc);
    //     let a;
    //     if (val === elem) {
    //         a = acc + 1;
    //     } else {
    //         a = acc;
    //     }
    //     return a;
    // }, 0);
    return count;
}
console.log('frecventa', frecventa([7, 7, 2, 1, 3, 4]));




// CHALLENGE 4

//Remove duplicates from an array
let duplicates = (arr) => {
    let b = [];
    //first solution
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr, i, arr[i], b.indexOf(arr[i]));
    //     if (b.indexOf(arr[i]) === -1) {
    //         b.push(arr[i]);
    //     }
    // }
    // return b;

    //second solution
    // arr.sort();
    // let temp;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== temp) {
    //         b.push(arr[i]);
    //         temp = arr[i];
    //     }
    // }
    // console.log(b);
    // return temp;

    //thrird solution
    // let hashtable = {};
    // for (let i of arr) {
    //     hashtable[i] = 1;
    //     console.log(i, arr, hashtable);
    // }
    // b = Array.from(Object.keys(hashtable), Number);
    // return b;

    //forth solution
    return [... new Set(arr)];
}
console.log('duplicates', duplicates([1, 2, 5, 1, 1, 8]));