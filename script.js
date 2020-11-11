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




// CHALLENGE 5
//Power Calculator
//Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

const circuitPower = (voltage, current) => {
    return current * voltage;
}
console.log('circuitPower', circuitPower(230, 10));





// CHALLENGE 6
//Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
//This is calculated by subtracting the number of downvotes from upvotes.

// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

const getVoteCount = (votes) => {
    // for (let i in votes) {
    //     console.log(votes['upvotes'] - votes['downvotes']);
    // }
    return (Object.values(votes)[0] - Object.values(votes)[1]);
}
console.log('getVoteCount', getVoteCount({ upvotes: 1, downvotes: 4 }));




// CHALLENGE 7
// Format I: Template String
// Write a template string according to the following example:
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
// Tips

// A template string is a string that uses Dollar sign and curly braces inside a backticks ${} as a placeholder that can then be formatted:

// const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."

// You can put an expression inside the curly braces :

// const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."

// modify the template variable to be a template string 
const format = (a, b, c) => {
    // the result string must give: "Their names were: a, b and c."
    return `Their names were: ${a}, ${b} and ${c}.`;
}
console.log('format', format('John', 'Joe', 'Jack'));




// CHALLENGE 8
// Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
// Examples

// checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false
// checkEnding("samurai", "zi") ➞ false
// checkEnding("feminine", "nine") ➞ true
// checkEnding("convention", "tio") ➞ false

// Notes
// All test cases are valid one word strings.

const checkEnding = (str1, str2) => {
    return str1.substr(str1.length - str2.length) === str2 ? true : false;
    //return str1.endsWith(str2) ? true : false;
}
console.log('checkEnding', checkEnding('feminine', 'nine'));




// CHALLENGE 9
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Examples
// howManyTimes(5) ➞ "Edaaaaabit"
// howManyTimes(0) ➞ "Edbit"
// howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
// Notes
//     The string must start with "Ed" and end with "bit".
//     You'll only be given integers as test input.

var howManyTimes = (num) => {
    return `Ed${'a'.repeat(num)}bit`;
}
console.log('howManyTimes', howManyTimes(1));




// CHALLENGE 10
// Cube the Square Root
// Create a function that takes a number as an argument and returns the square root of that number cubed.

// Examples
// cubeSquareRoot(81) ➞ 729
// cubeSquareRoot(1646089) ➞ 2111932187
// cubeSquareRoot(695556) ➞ 580093704

// Notes
// All numbers will evenly square root, so don't worry about decimal numbers.

let cubeSquareRoot = (num) => {
    return num * Math.sqrt(num);
}
console.log('cubeSquareRoot', cubeSquareRoot(1646089));




// CHALLENGE 11
// Smash Factor

// Smash factor is a term in golf that relates to the amount of energy transferred from the club head to the golf ball.
// The formula for calculating smash factor is ball speed divided by club speed.
// Create a function that takes ball speed bs and club speed cs as arguments and returns the smash factor to the nearest hundredth.
// Examples

// smashFactor(139.4, 93.8) ➞ 1.49
// smashFactor(181.2, 124.5) ➞ 1.46
// smashFactor(154.7, 104.3) ➞ 1.48
// Notes
//     Remember to round to the nearest hundredth.
//     All values will be valid (so no dividing by zero).


let smashFactor = (bs, cs) => {
    return Number((bs / cs).toFixed(2));
}
console.log('smashFactor', smashFactor(154.7, 104.3));




// CHALLENGE 12
// Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//Examples
// miniMaxSum([7, 69, 2, 221, 8974]);
// miniMaxSum([1, 2, 3, 4, 5]);
const miniMaxSum = (arr) => {
    let total = arr.reduce((acc, number) => acc + number, 0);
    let maxim = total - Math.min(...arr);
    let minim = total - Math.max(...arr);
    console.log('miniMaxSum', minim, maxim);
}
miniMaxSum([1, 2, 3, 4, 5]);




// CHALLENGE 13
// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest. 
const birthdayCakeCandles = (candles) => {
    // Write your code here
    let max = Math.max(...candles);
    let big = [];
    //return candles.filter(candy => max === candy).length;
    for (let i = 0; i < [...candles].length; i++) {
        if (max === candles[i]) {
            big.push(candles[i]);
        }
    }
    console.log('birthdayCakeCandles', big.length);
}
birthdayCakeCandles([3, 1, 2, 3]);




// CHALLENGE 14
// Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
const timeConversion = (s) => {
    if (s.slice(-2) === "AM") {
        if (s.slice(0, 2) == '12') {
            return ("00" + s.slice(2, -2))
        }
        return (s.slice(0, -2))
    } else {
        if (s.slice(0, 2) == '12') {
            return (s.slice(0, -2))
        }
        let firstS = Number(s.slice(0, 2)) + 12;
        let secondS = s.slice(2, -2);
        return (firstS + secondS);
    }
}
console.log('timeConversion', timeConversion('12:05:45AM'));




// CHALLENGE 15
//Two sum
//Given an array of numbers and an target return an array with the numbers that
//have the sum equal with target
const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let firstNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secondNUmber = arr[j];
            if (firstNumber + secondNUmber === target) {
                return [firstNumber, secondNUmber];
            }
        }
        console.log(arr[i]);
    }
    console.log(arr, target);
}
console.log('twoSum', twoSum([4, -1, 0, 1, 5, 6, 8, 10], 9));




// CHALLENGE 16
// Older Than Me
// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.
// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)

// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        if (other.age < this.age) {
            return `${other.name} is younger than me.`
        } else if (other.age > this.age) {
            return `${other.name} is older than me.`
        } else {
            return `${other.name} is the same age as me.`
        }
    }
}
let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);
console.log(p1, p2, p1.compareAge(p2));
console.log(p2.compareAge(p1), p1.compareAge(p3));