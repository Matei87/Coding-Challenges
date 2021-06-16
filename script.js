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
console.log('compareAge', p2.compareAge(p1), p1.compareAge(p3));




// CHALLENGE 17
// Return Last Index
// Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
// lastItem([]) ➞ undefined

// Notes

//     Arrays/strings will be of varying size.
//     Return undefined if array/string is empty.
const lastItem = (input) => {
    return input[input.length - 1];
}
console.log('lastItem', lastItem([]));




// CHALLENGE 18
// Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

// Examples
// nameShuffle("Donald Trump") ➞ "Trump Donald"
// nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
// nameShuffle("Seymour Butts") ➞ "Butts Seymour"

// Notes

//     There will be exactly one space between the first and last name.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
const nameShuffle = (str) => {
    return str.split(' ').reverse().join(' ');
}
console.log('nameShuffle', nameShuffle("Rosie O'Donnell"));




// CHALLENGE 19
// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
// canCapture(["A8", "E8"]) ➞ true
// canCapture(["A1", "B2"]) ➞ false
// canCapture(["H4", "H3"]) ➞ true
// canCapture(["F5", "C8"]) ➞ false

// Notes

//     Assume no blocking pieces.
//     Two rooks can attack each other if they share the same row (letter) or column (number).
const canCapture = ([yourRook, opponentsRook]) => {
    return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1] ? true : false;
}
console.log('canCapture', canCapture(["F5", "C8"]));



// CHALLENGE 20
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.
const evenOrOdd = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log('evenOrOdd', evenOrOdd(2));



// CHALLENGE 21
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in
// this way until a single-digit number is produced. The input will be a non-negative integer.

const digital_root = (n) => {
    return ((n - 1) % 9) + 1;
}
console.log('digital_root', digital_root(156));



// CHALLENGE 22
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to
// your most secret question is still correct. However, since someone could look over your shoulder, you don't
// want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// EXAMPLES
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// return masked string
const maskify = (cc) => {
    let lengthMinus4 = cc.slice(0, -4).split('').map(a => '#').join('').concat(cc.slice(-4, cc.length));
    return lengthMinus4;
}
console.log('maskify', maskify('9999999999999'));


// CHALLENGE 23
// The goal is to create a function 'numberToPower(number, power)' that "raises"
// the number up to power (ie multiplies number by itself power times).
// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
const numberToPower = (number, power) => {
    return number ** power;
}
console.log('numberToPower', numberToPower(2, 3));



// CHALLENGE 24
// Define a function that takes one integer argument and returns logical value true or false
// depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no
// positive divisors other than 1 and itself.
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}
console.log('isPrime', isPrime(4));



// CHALLENGE 25
// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
const likes = (names) => {
    // TODO
    let a = []
    for (let i = 0; i < names.length; i++) {
        a.push(names[i])
    }
    if (a.length === 0) {
        return 'no one likes this'
    } else if (a.length === 1) {
        return `${a} likes this`
    } else if (a.length === 2) {
        return `${a[0]} and ${a[1]} like this`
    } else if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`
    } else if (a.length >= 4) {
        return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
    }
}
console.log('likes', likes(['Alex', 'Jacob', 'Mark', 'Max', 'Ionut']));



// CHALLENGE 26
// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
function countTrue(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            a.push(arr[i])
        }
    }
    return a.length;
}
console.log('countTrue ', countTrue([true, false, false, true, false]));



// CHALLENGE 27
// Write a function redundant that takes in a string str and returns a function that returns str.
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// Notes: Your function should return a function, not a string.
function redundant(str) {
    return function () {
        return str;
    }
}
const f2 = redundant("pear")
console.log('redundant ', f2());



// CHALLENGE 28
// Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// Notes
//     60 seconds in a minute, 60 minutes in an hour
//     Don't forget to return your answer.
function howManySeconds(hours) {
    return hours * 60 * 60;
}
console.log('howManySeconds ', howManySeconds(2));



// CHALLENGE 29
// Convert Age to Days
// Create a function that takes the age and return the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300
// Notes

//     Use 365 days as the length of a year for this challenge.
//     Ignore leap years and days between last birthday and now.
//     Expect only positive integer inputs.
function calcAge(age) {
    return age * 365;
}
console.log('calcAge ', calcAge(65));



// CHALLENGE 30
// Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
// Examples
// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false

// Notes
//     You cannot move backward (which is why example #3 doesn't work).
//     If you are already on the same tile, return false, as you would be advancing away.
//     Expect only positive integer inputs.
function possibleBonus(a, b) {
    return b - a <= 6 && b > a ? true : false;
}
console.log('possibleBonus ', possibleBonus(3, 7));



// CHALLENGE 31
// Is it Time for Milk and Cookies?
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
// Notes
//     Dates are zero zero based (see resources).
//     All test cases contain valid dates.
function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24 ? true : false;
}
console.log('timeForMilkAndCookies ', timeForMilkAndCookies(new Date(3000, 11, 24)));



// CHALLENGE 32
// Matchstick Houses
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436
// Notes
//     Step 0 returns 0 matchsticks.
//     The input (step) will always be a non-negative integer.
//     Think of the input (step) as the total number of houses that have been connected together.
function matchHouses(step) {
    return step === 1 ? step * 6 : step >= 2 ? step * 6 - (step - 1) : 0;
}
console.log('matchHouses ', matchHouses(0));




// CHALLENGE 33
// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
//     arr1's min is greater than arr2's min.
//     arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// Notes
// Note the strict inequality (see example #3).
function canNest(arr1, arr2) {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ? true : false;
}
console.log('canNest ', canNest([9, 9, 8], [8, 9]));



// CHALLENGE 34
// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.
function addUp(num) {
    let first = 0;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (first <= num) {
            first++
            sum += first;
        }
    }
    return sum;
}
console.log('addUp ', addUp(4));



// CHALLENGE 35
// Convert a Number to Base-2
// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
// Examples
// binary(1) ➞ "1"
// // 1*1 = 1
// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
// Notes
//     Numbers will always be below 1024 (not including 1024).
//     The && operator could be useful.
//     The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
//     If a binary conversion for 0 is attempted, return "0".
function binary(decimal) {
    return decimal.toString(2);
}
console.log('binary ', binary(1023));



// CHALLENGE 36
// Which Function Returns the Larger Number?
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
//     If f returns the larger number, return the string f.
//     If g returns the larger number, return the string g.
//     If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
// whichIsLarger(() => 505050, () => 5050) ➞ "f"
// Notes
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
const whichIsLarger = (f, g) => f() > g() ? 'f' : f() < g() ? 'g' : 'neither';
console.log('whichIsLarger ', whichIsLarger(() => 10, () => 1));



// CHALLENGE 37
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
// Notes
//     Check out the Resources tab for some helpful tutorials on JavaScript classes!
//     If you're really stuck, check out the Solutions tab for answers.
class Perz {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        // Write code here!
        return other.age > this.age ? other.name + ' is older than me.' : other.age < this.age ? other.name + ' is younger than me.' : other.name + ' is the same age as me.'
    }
}
let pez1 = new Perz("Samuel", 24);
let pez2 = new Perz("Joel", 36);
console.log('Perz persons', pez1, pez2);
console.log('Perz compare', pez2.compareAge(pez1));



// CHALLENGE 38
// Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:
// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// Notes
// N/A
function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
}
console.log('sortDrinkByPrice ', sortDrinkByPrice([{ name: 'lemonade', price: 90 },
{ name: 'lime', price: 432 },
{ name: 'peach', price: 23 }]));



// CHALLENGE 39
// Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers of two.
// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// Examples
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944
// Notes
//     There will be no negative values for the second parameter y.
//     This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
//     Alternatively, you can solve this challenge via recursion.
//     A recursive version of this challenge can be found via this link.
function shiftToLeft(x, y) {
    return x * Math.pow(2, y);
}
console.log('shiftToLeft ', shiftToLeft(-6, 5));



// CHALLENGE 40
// Number of Squares in an N * N Grid
// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
// Examples
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55
// Notes
//     Input is a positive integer.
//     Square pyramidal number.
function numberSquares(n) {
    let first = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (first < n) {
            first++;
            sum += Math.pow(first, 2)
        }
    }
    return sum;
}
console.log('numberSquares ', numberSquares(2));



// CHALLENGE 41
// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}
console.log('minMax ', minMax([1, 2, 3, 4, 5]));




// CHALLENGE 41
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = arr => {
    // your code
    return parseInt((arr + '').replace(/[^01]/gi, ''), 2)
};
console.log('binaryArrayToNumber ', binaryArrayToNumber([0, 0, 0, 1]));




// CHALLENGE 42
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// SQL: return results in a column named greeting
// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greetSQL(name) {
    //your code here
    return `Hello, ${name} how are you doing today?`
}
console.log('greetSQL ', greetSQL("Ryan"));




// CHALLENGE 44
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
    let a = []
    if (!array.length) {
        return [];
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                a.push(0);
            } else {
                a.push(-array[i]);
            }
        }
    }

    return a;
}
console.log('invert ', invert([1, -2, 3, -4, 5, 0]));




// CHALLENGE 45
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
function divisibleBy(numbers, divisor) {
    let a = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            a.push(numbers[i])
        }
    }
    return a;
}
console.log('divisibleBy ', divisibleBy([1, 6, 5], 2));




// CHALLENGE 46
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//     I love you
//     a little
//     a lot
//     passionately
//     madly
//     not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
    return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals % 6]
}
console.log('howMuchILoveYou ', howMuchILoveYou(7));




// CHALLENGE 47
// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:
//     Aquarius ------ 21 January - 19 February
//     Pisces --------- 20 February - 20 March
//     Aries ---------- 21 March - 20 April
//     Taurus -------- 21 April - 21 May
//     Gemini -------- 22 May - 21 June
//     Cancer -------- 22 June - 22 July
//     Leo ------------- 23 July - 23 August
//     Virgo ----------- 24 August - 23 September
//     Libra ----------- 24 September - 23 October
//     Scorpio -------- 24 October - 22 November
//     Sagittarius ---- 23 November - 21 December
//     Capricorn ----- 22 December - 20 January
// Test info: 100 random tests (dates range from January 1st 1940 until now)
function starSign(date) {
    let day = date.getDate(); let month = date.getMonth() + 1;
    if (month === 1 && day >= 21 || month === 2 && day <= 19) {
        return 'Aquarius';
    } else if (month === 2 && day >= 20 || month === 3 && day <= 20) {
        return 'Pisces';
    } else if (month === 3 && day >= 21 || month === 4 && day <= 20) {
        return 'Aries';
    } else if (month === 4 && day >= 21 || month === 5 && day <= 21) {
        return 'Taurus';
    } else if (month === 5 && day >= 22 || month === 6 && day <= 21) {
        return 'Gemini';
    } else if (month === 6 && day >= 22 || month === 7 && day <= 22) {
        return 'Cancer';
    } else if (month === 7 && day >= 23 || month === 8 && day <= 23) {
        return 'Leo';
    } else if (month === 8 && day >= 24 || month === 9 && day <= 23) {
        return 'Virgo';
    } else if (month === 9 && day >= 24 || month === 10 && day <= 23) {
        return 'Libra';
    } else if (month === 10 && day >= 24 || month === 11 && day <= 22) {
        return 'Scorpio';
    } else if (month === 11 && day >= 23 || month === 12 && day <= 21) {
        return 'Sagittarius';
    } else if (month === 12 && day >= 22 || month === 1 && day <= 20) {
        return 'Capricorn';
    }
}
console.log('starSign ', starSign(new Date(1970, 5, 5)));




// CHALLENGE 48
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
    return Math.floor(s / 0.036)
}
console.log('cockroachSpeed ', cockroachSpeed(0));




// CHALLENGE 49
// The Hashtag Generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
function generateHashtag(str) {
    //console.log(str)
    //console.log(str.split(' '))
    let first = [];
    str.split(' ').map(b => {
        //console.log(b.slice(0, 1).toUpperCase())
        first.push(b.slice(0, 1).toUpperCase() + b.slice(1, b.length));
    })
    //console.log(first.join(''))
    let a = '#' + first.join('')
    if (first.join('') === '' || a.length > 140 || str === '') {
        return false;
    }
    return a;
}
console.log('generateHashtag ', generateHashtag("code" + " ".repeat(140) + "wars"));




// CHALLENGE 50
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Input to the function is guaranteed to be a single string.
// Examples
// Valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
function isValidIP(ip) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|(?=$))){4}$/.test(ip)
}
console.log('isValidIP ', isValidIP('1.1.1e2.1'));




// CHALLENGE 50
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}
console.log('paperwork ', paperwork(5, 5));




// CHALLENGE 51
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #22
// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
// Any remaining seconds left over are ignored.
// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"
// For example:
// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 23500 --> "89 hour(s) and 51 minute(s)"
function toTime(seconds) {
    let hours = seconds / 3600;
    let minutes;
    console.log(hours, hours % 1 === 0)
    if (hours > 1) {
        console.log(seconds % 3600, Math.floor(seconds % 3600 / 60))
        minutes = Math.floor(seconds % 3600 / 60)
    }
    if (hours < 1) {
        hours = 0;
        minutes = Math.floor(seconds % 3600 / 60)
    }
    if (minutes === undefined) {
        minutes = 0;
    }
    return `${Math.floor(hours)} hour(s) and ${minutes} minute(s)`
}
console.log('toTime ', toTime(3500));




// CHALLENGE 52
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
    //console.log('numbers ', numbers, numbers.split(' '));
    let a = numbers.split(' ');
    //console.log('a ', a);
    let b = a.map(num => Number(num))
    //console.log('b ', b);
    let c = b.sort( (d, e) => d - e)
    //console.log('c ', c);
    //console.log(c[0], c[c.length - 1]);
   return c[c.length - 1] + ' ' + c[0];
}
console.log('highAndLow ', highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));