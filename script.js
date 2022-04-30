"use strict";

// CHALLENGE 1
// PALIDROME
// Given a string determine whether it is a palidrome
var palidrome = (string) => {
  var sanitazedString = string.toLowerCase().trim();
  return sanitazedString === sanitazedString.split("").reverse().join("");
};
console.log("palidrome", palidrome("   iyeLLeYI"));

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
};
console.log("numere lipsa", numereLipsa([0, 2, 5, 9, 11]));

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
};
console.log("frecventa", frecventa([7, 7, 2, 1, 3, 4]));

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
  return [...new Set(arr)];
};
console.log("duplicates", duplicates([1, 2, 5, 1, 1, 8]));

// CHALLENGE 5
//Power Calculator
//Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

const circuitPower = (voltage, current) => {
  return current * voltage;
};
console.log("circuitPower", circuitPower(230, 10));

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
  return Object.values(votes)[0] - Object.values(votes)[1];
};
console.log("getVoteCount", getVoteCount({ upvotes: 1, downvotes: 4 }));

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
};
console.log("format", format("John", "Joe", "Jack"));

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
};
console.log("checkEnding", checkEnding("feminine", "nine"));

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
  return `Ed${"a".repeat(num)}bit`;
};
console.log("howManyTimes", howManyTimes(1));

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
};
console.log("cubeSquareRoot", cubeSquareRoot(1646089));

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
};
console.log("smashFactor", smashFactor(154.7, 104.3));

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
  console.log("miniMaxSum", minim, maxim);
};
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
  console.log("birthdayCakeCandles", big.length);
};
birthdayCakeCandles([3, 1, 2, 3]);

// CHALLENGE 14
// Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
const timeConversion = (s) => {
  if (s.slice(-2) === "AM") {
    if (s.slice(0, 2) == "12") {
      return "00" + s.slice(2, -2);
    }
    return s.slice(0, -2);
  } else {
    if (s.slice(0, 2) == "12") {
      return s.slice(0, -2);
    }
    let firstS = Number(s.slice(0, 2)) + 12;
    let secondS = s.slice(2, -2);
    return firstS + secondS;
  }
};
console.log("timeConversion", timeConversion("12:05:45AM"));

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
};
console.log("twoSum", twoSum([4, -1, 0, 1, 5, 6, 8, 10], 9));

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
      return `${other.name} is younger than me.`;
    } else if (other.age > this.age) {
      return `${other.name} is older than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}
let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);
console.log("compareAge", p2.compareAge(p1), p1.compareAge(p3));

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
};
console.log("lastItem", lastItem([]));

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
  return str.split(" ").reverse().join(" ");
};
console.log("nameShuffle", nameShuffle("Rosie O'Donnell"));

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
  return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]
    ? true
    : false;
};
console.log("canCapture", canCapture(["F5", "C8"]));

// CHALLENGE 20
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.
const evenOrOdd = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};
console.log("evenOrOdd", evenOrOdd(2));

// CHALLENGE 21
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in
// this way until a single-digit number is produced. The input will be a non-negative integer.

const digital_root = (n) => {
  return ((n - 1) % 9) + 1;
};
console.log("digital_root", digital_root(156));

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
  let lengthMinus4 = cc
    .slice(0, -4)
    .split("")
    .map((a) => "#")
    .join("")
    .concat(cc.slice(-4, cc.length));
  return lengthMinus4;
};
console.log("maskify", maskify("9999999999999"));

// CHALLENGE 23
// The goal is to create a function 'numberToPower(number, power)' that "raises"
// the number up to power (ie multiplies number by itself power times).
// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
const numberToPower = (number, power) => {
  return number ** power;
};
console.log("numberToPower", numberToPower(2, 3));

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
};
console.log("isPrime", isPrime(4));

// CHALLENGE 25
// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
const likes = (names) => {
  // TODO
  let a = [];
  for (let i = 0; i < names.length; i++) {
    a.push(names[i]);
  }
  if (a.length === 0) {
    return "no one likes this";
  } else if (a.length === 1) {
    return `${a} likes this`;
  } else if (a.length === 2) {
    return `${a[0]} and ${a[1]} like this`;
  } else if (a.length === 3) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`;
  } else if (a.length >= 4) {
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
};
console.log("likes", likes(["Alex", "Jacob", "Mark", "Max", "Ionut"]));

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
      a.push(arr[i]);
    }
  }
  return a.length;
}
console.log("countTrue ", countTrue([true, false, false, true, false]));

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
  };
}
const f2 = redundant("pear");
console.log("redundant ", f2());

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
console.log("howManySeconds ", howManySeconds(2));

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
console.log("calcAge ", calcAge(65));

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
console.log("possibleBonus ", possibleBonus(3, 7));

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
console.log(
  "timeForMilkAndCookies ",
  timeForMilkAndCookies(new Date(3000, 11, 24))
);

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
console.log("matchHouses ", matchHouses(0));

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
  return Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false;
}
console.log("canNest ", canNest([9, 9, 8], [8, 9]));

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
      first++;
      sum += first;
    }
  }
  return sum;
}
console.log("addUp ", addUp(4));

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
console.log("binary ", binary(1023));

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
const whichIsLarger = (f, g) => (f() > g() ? "f" : f() < g() ? "g" : "neither");
console.log(
  "whichIsLarger ",
  whichIsLarger(
    () => 10,
    () => 1
  )
);

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
    return other.age > this.age
      ? other.name + " is older than me."
      : other.age < this.age
      ? other.name + " is younger than me."
      : other.name + " is the same age as me.";
  }
}
let pez1 = new Perz("Samuel", 24);
let pez2 = new Perz("Joel", 36);
console.log("Perz persons", pez1, pez2);
console.log("Perz compare", pez2.compareAge(pez1));

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
  return drinks.sort((a, b) => a.price - b.price);
}
console.log(
  "sortDrinkByPrice ",
  sortDrinkByPrice([
    { name: "lemonade", price: 90 },
    { name: "lime", price: 432 },
    { name: "peach", price: 23 },
  ])
);

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
console.log("shiftToLeft ", shiftToLeft(-6, 5));

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
      sum += Math.pow(first, 2);
    }
  }
  return sum;
}
console.log("numberSquares ", numberSquares(2));

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
  return [Math.min(...arr), Math.max(...arr)];
}
console.log("minMax ", minMax([1, 2, 3, 4, 5]));

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
const binaryArrayToNumber = (arr) => {
  // your code
  return parseInt((arr + "").replace(/[^01]/gi, ""), 2);
};
console.log("binaryArrayToNumber ", binaryArrayToNumber([0, 0, 0, 1]));

// CHALLENGE 42
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// SQL: return results in a column named greeting
// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greetSQL(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}
console.log("greetSQL ", greetSQL("Ryan"));

// CHALLENGE 44
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
  let a = [];
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
console.log("invert ", invert([1, -2, 3, -4, 5, 0]));

// CHALLENGE 45
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
function divisibleBy(numbers, divisor) {
  let a = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      a.push(numbers[i]);
    }
  }
  return a;
}
console.log("divisibleBy ", divisibleBy([1, 6, 5], 2));

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
  return [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
  ][nbPetals % 6];
}
console.log("howMuchILoveYou ", howMuchILoveYou(7));

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
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
    return "Aquarius";
  } else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
    return "Pisces";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    return "Aries";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
    return "Taurus";
  } else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
    return "Gemini";
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return "Cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
    return "Leo";
  } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
    return "Virgo";
  } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
    return "Libra";
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    return "Scorpio";
  } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    return "Sagittarius";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
    return "Capricorn";
  }
}
console.log("starSign ", starSign(new Date(1970, 5, 5)));

// CHALLENGE 48
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}
console.log("cockroachSpeed ", cockroachSpeed(0));

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
  str.split(" ").map((b) => {
    //console.log(b.slice(0, 1).toUpperCase())
    first.push(b.slice(0, 1).toUpperCase() + b.slice(1, b.length));
  });
  //console.log(first.join(''))
  let a = "#" + first.join("");
  if (first.join("") === "" || a.length > 140 || str === "") {
    return false;
  }
  return a;
}
console.log(
  "generateHashtag ",
  generateHashtag("code" + " ".repeat(140) + "wars")
);

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
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|(?=$))){4}$/.test(ip);
}
console.log("isValidIP ", isValidIP("1.1.1e2.1"));

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
console.log("paperwork ", paperwork(5, 5));

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
  console.log(hours, hours % 1 === 0);
  if (hours > 1) {
    console.log(seconds % 3600, Math.floor((seconds % 3600) / 60));
    minutes = Math.floor((seconds % 3600) / 60);
  }
  if (hours < 1) {
    hours = 0;
    minutes = Math.floor((seconds % 3600) / 60);
  }
  if (minutes === undefined) {
    minutes = 0;
  }
  return `${Math.floor(hours)} hour(s) and ${minutes} minute(s)`;
}
console.log("toTime ", toTime(3500));

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
function highAndLow(numbers) {
  //console.log('numbers ', numbers, numbers.split(' '));
  let a = numbers.split(" ");
  //console.log('a ', a);
  let b = a.map((num) => Number(num));
  //console.log('b ', b);
  let c = b.sort((d, e) => d - e);
  //console.log('c ', c);
  //console.log(c[0], c[c.length - 1]);
  return c[c.length - 1] + " " + c[0];
}
console.log("highAndLow ", highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// CHALLENGE 53
// from 'abcdef' to ['a', 'a.b', 'a.b.c', 'a.b.c.d', ...]
function splitTo(string) {
  let newArray = [];
  let built = "";
  for (let i = 0; i < string.length; i++) {
    built += string[i];
    newArray.push(built.split("").join("."));
  }
  console.log(built, newArray, string);
  return newArray;
}
console.log("splitTo ", splitTo("abcdef"));

// CHALLENGE 54
let dats = [
  { Car: "Honda", hello: "hi" },
  { Car: "Honda", hello: "hieee" },
  { car: "Volvo" },
];
//the output is :
// Honda
// hi
// Volvo
// and I want it to be only this :
// hi
let c = [];
// for(let i = 0; i < dats.length; i++){
//     if(Object.values(dats[i])[1] === undefined){
//         continue;
//     }
//     console.log(Object.values(dats[i])[1])
//     c += Object.values(dats[i])[1];
// }
for (let i = 0; i < dats.length; i++) {
  if (Object.values(dats[i])[1] === undefined) {
    continue;
  }
  c.push(Object.values(dats[i])[1]);
}
console.log("DATAA ", c);

// CHALLENGE 55
const countAnimals = (sentence) => {
  // Your code here
  return sentence
    .split(" ")
    .map((n) => +n)
    .filter((n) => n > 0)
    .reduce((a, b) => a + b, 0);
};
console.log(
  "countAnimals ",
  countAnimals("Mom, 3 rhinoceros and 6 snakes come to us!")
);

const arrayed = (arr) => {
  //Good luck
  let arrayed = arr.split("");
  if (arr.length <= 2) {
    return null;
  }
  let newArray = [];
  for (let i = 0; i < arrayed.length; i++) {
    if (arrayed[i] === " " || arrayed[i] === ",") {
      continue;
    }
    newArray.push(arrayed[i]);
  }
  if (newArray.length <= 2) {
    return null;
  }
  console.log(arrayed, newArray);
  newArray.pop();
  newArray.shift();
  console.log(newArray);
  return newArray.toString();
};
console.log("arrayed ", arrayed("1, 3"));

// CHALLENGE 56
// Write a function that checks whether all elements in an array are square numbers.
// The function should be able to take any number of array elements.
// Examples:
// is_square([1, 4, 9, 16]) --> True
// is_square([3, 4, 7, 9]) --> False
// is_square([]) --> None
const isSquare = (arr) => {
  //Your code here
  return arr.length &&
    arr.map((x) => (Math.sqrt(x) % 1 !== 0 ? false : true)).includes(false)
    ? false
    : true;
};
console.log("isSquare ", isSquare([3, 4, 9, 16]));

// CHALLENGE 57
// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number
// representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.
// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
const freqSeq = (str, sep) => {
  let a = str.split("").filter((x) => x !== " ");
  let b = {};
  a.forEach((x) => {
    if (b[x]) {
      b[x]++;
    } else {
      b[x] = 1;
    }
  });
  console.log(str, b);
};
console.log("freqSeq ", freqSeq("hello world", "-"));

// CHALLENGE 58
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
// Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.
const findLongest = (str) => {
  let spl = str.split(" ");
  let longest = 0;
  spl.map((i) => {
    if (i.length > longest) {
      longest = i.length;
    }
  });
  return longest;
};
console.log(
  "findLongest ",
  findLongest("The quick white fox jumped around the massive dog")
);

// CHALLENGE 59
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// For example:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
const domainName = (url) => {
  //your code here
  if (url.includes("www.")) {
    return url.slice(url.indexOf(".") + 1, url.lastIndexOf("."));
  } else if (url.includes("http")) {
    // if doesnt contain www
    let urls;
    urls = url.slice(4, url.length);
    urls = "http://" + urls;
    let urlHostnames = new URL(urls).hostname;
    return urlHostnames.slice(0, urlHostnames.indexOf("."));
  } else if (!url.includes("http")) {
    let urlz;
    urlz = "http://" + url;
    let urlHostnamez = new URL(urlz).hostname;
    return urlHostnamez.slice(0, urlHostnamez.indexOf("."));
  }
};
console.log("domainName ", domainName("://www.xakep.ru"));

// CHALLENGE 60
// I will give you an integer.
// Give me back a shape that is as long and wide as the integer.
// The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++
const generateShape = (integer) => {
  let shape = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      shape += "+";
    }
    if (i < integer - 1) {
      shape += "\n";
    }
  }
  return shape;
};
console.log("generateShape ", generateShape(3));

// CHALLENGE 61
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle"
// -->
// "battle no requires which that is victory greatest The"
const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(
  "reverseWords ",
  reverseWords("The greatest victory is that which requires no battle")
);

// CHALLENGE 62
// Write a function that accepts two arguments: an array/list of integers and another integer (n).
// Determine the number of times where two integers in the array have a difference of n.
// For example:
// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
const intDiff = (arr, n) => {
  const perechi = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let store = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[j] - store) === n) {
        perechi.push([i, j]);
      }
    }
  }
  return perechi.length;
};
console.log("intDiff ", intDiff([1, 1, 5, 6, 9, 16, 27], 4));

// CHALLENGE 63
// Write a function that reverses the bits in an integer.
// For example, the number 417 is 110100001 in binary.
// Reversing the binary is 100001011 which is 267.
// You can assume that the number is not negative.
const reverseBits = (n) => {
  // your code here
  const reversedBinary = n.toString(2).split("").reverse().join("");
  return parseInt(reversedBinary, 2);
};
console.log("reverseBits ", reverseBits(1024));

// CHALLENGE 64
// Given a positive integer n: 0 < n < 1e6,
// remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three,
// and return null/nil/None/-1 if no such number exists.
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9
const prevMultOfThree = (n) => {
  //your solution
  const str = n.toString().split("").reverse("").join("");
  for (let i = 0; str.length; i++) {
    if ((str.slice(i).split("").reverse("").join("") * 1) % 3 === 0) {
      if (str.slice(i).split("").reverse("").join("") * 1 === 0) {
        return null;
      }
      return str.slice(i).split("").reverse("").join("") * 1;
    }
  }
  return null;
};
console.log("prevMultOfThree ", prevMultOfThree(1));

// CHALLENGE 65
// Character with longest consecutive repetition
// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition.
// If there are two or more characters with the same l return the first in order of appearance.
// For empty string return:
// ["", 0]
// In JavaScript: If you use Array.sort in your solution,
// you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars.
// This is not a kata issue.
// Happy coding! :)
const longestRepetition = (s) => {
  if (s.length === 0) {
    return ["", 0];
  } else if (s.length === 1) {
    return [s, 1];
  } else {
    let maxDetected = 1;
    let presentChar = "";
    let presentCount = 0;
    let answer = [s[0], 1]; // first Character
    for (let i = 0; i < s.length - 1; i++) {
      presentChar = s[i];
      presentCount = 1;
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] === s[i]) {
          presentCount += 1;
        } else {
          break;
        }
      }
      if (presentCount > maxDetected) {
        maxDetected = presentCount;
        answer[0] = presentChar;
        answer[1] = maxDetected;
      }
    }
    return answer;
  }
};
console.log("longestRepetition ", longestRepetition("aabbb"));

// CHALLENGE 66
// Reverse a Number
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1
const reverseNumber = (n) => {
  return parseFloat(String(n).split("").reverse("").join("")) * Math.sign(n);
};
console.log("reverseNumber ", reverseNumber(1000));

// CHALLENGE 67
// Narcissistic Numbers
// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
// If this seems confusing, refer to the example below.
// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153
const isNarcissistic = (n) => {
  //your code here
  console.log("original number ", n);
  let strn = n.toString();
  let num = {};
  for (let i = 0; i < strn.length; i++) {
    if (num[i] === undefined) {
      num[i] = strn[i];
    }
  }

  const poweredNums = Object.values(num)
    .map((el, ind, arr) => Math.pow(el, arr.length))
    .reduce((a, b) => a + b, 0);
  console.log("poweredNums ", poweredNums);
  return poweredNums === n ? true : false;
};
console.log("isNarcissistic ", isNarcissistic(435));

// CHALLENGE 68
// Single digit
// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary,
//taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.
//     If the passed integer is already a single digit there is no need to reduce
//     n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:
// 5665 --> (binary) 1011000100001
// 1011000100001 --> (sum of binary digits) 5
// Given 123456789 the function should return 1:
// 123456789 --> (binary) 111010110111100110100010101
// 111010110111100110100010101 --> (sum of binary digits) 16
// 16 --> (binary) 10000
// 10000 --> (sum of binary digits) 1
const singleDigit = (n) => {
  return n
    .toString(2)
    .split("")
    .filter((val) => val >= 1)
    .reduce((prev, acc) => +prev + +acc, 0);
};
console.log("singleDigit ", singleDigit(999));

// CHALLENGE 69
// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

const multiplesOf3Or5 = (number) => {
  let a = 0;
  for (let i = 0; i < number; i++) {
    //console.log(number, i, number[i]);
    number < 0 ? 0 : i % 3 === 0 || i % 5 === 0 ? (a += i) : a;
  }
  return a;
  //return a.forEach((acc, curr) => acc + curr);
};
console.log("multiplesOf3Or5 ", multiplesOf3Or5(10, 23));

// CHALLENGE 70
// Perfect powers are numbers that can be written mkm^kmk, where mmm and kkk are both integers greater than 1.
// Your task is to write a function that returns the perfect power nearest any number.
// Notes
//     When the input itself is a perfect power, return this number
//     Since 4 is the smallest perfect power, for inputs < 4 (including 0, 1, and negatives) return 4
//     The input can be either a floating-point number or an integer
//     If there are two perfect powers equidistant from the input, return the smaller one

// Examples
// For instance,
//  0  -->   4
// 11  -->   9    #  9 = 3^2
// 34  -->  32    # 32 = 2^5 and 36 = 6^2 --> same distance, pick the smaller
const closestPower = (n) => {
  //Here we go...
  if (n < 4) {
    return 4;
  }
  console.log("number ", n);
  const roundedPower = Math.round(Math.log2(n));
  if (Math.pow(2, roundedPower) && Math.pow(roundedPower, 2) === n) {
    return n;
  }
  console.log(
    roundedPower,
    Math.pow(2, roundedPower),
    Math.pow(roundedPower, 2)
  );

  const abovePower = Math.pow(roundedPower, 2);
  const lowerPower = Math.pow(2, roundedPower);
  const aboveBeforePower = Math.pow(roundedPower + 1, 2);
  const lowerBeforePower = Math.pow(roundedPower - 1, 2);
  const aboveAfterPower = Math.pow(2, roundedPower + 1);
  const lowerAfterPower = Math.pow(2, roundedPower - 1);
  console.log(
    aboveBeforePower,
    lowerBeforePower,
    aboveAfterPower,
    lowerAfterPower
  );
  console.log(
    Math.abs(aboveBeforePower - n),
    Math.abs(lowerBeforePower - n),
    Math.abs(aboveAfterPower - n),
    Math.abs(lowerAfterPower - n)
  );
  const minimum = Math.min(
    Math.abs(abovePower - n),
    Math.abs(lowerPower - n),
    Math.abs(aboveBeforePower - n),
    Math.abs(lowerBeforePower - n),
    Math.abs(aboveAfterPower - n),
    Math.abs(lowerAfterPower - n)
  );
  console.log(minimum, "minimum ");
  return minimum === Math.abs(aboveBeforePower - n)
    ? aboveBeforePower
    : minimum === Math.abs(lowerBeforePower - n)
    ? lowerBeforePower
    : minimum === Math.abs(aboveAfterPower - n)
    ? aboveAfterPower
    : minimum === Math.abs(lowerAfterPower - n)
    ? lowerAfterPower
    : minimum === Math.abs(abovePower - n)
    ? abovePower
    : lowerPower;
};
console.log("closestPower ", closestPower(9));

// CHALLENGE 71
// Maximum Product
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes
//     Array/list size is at least 2.
//     Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
//     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50 .
// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
//     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
const adjacentElementsProduct = (array) => {
  // max product
  // const firstMax = Math.max(...array);
  // const secondMax = Math.max(...array.filter((i) => i !== firstMax));
  // console.log(firstMax, secondMax, firstMax * secondMax);
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > max) {
      max = array[i] * array[i + 1];
    }
  }
  return max;
};
console.log(
  "adjacentElementsProduct ",
  adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])
);

// CHALLENGE 72
// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
const bmi = (weight, height) => {
  const bmiCalculate = weight / height ** 2;
  return bmiCalculate <= 18.5
    ? "Underweight"
    : bmiCalculate <= 25.0
    ? "Normal"
    : bmiCalculate <= 30.0
    ? "Overweight"
    : "Obese";
};
console.log("bmi ", bmi(80, 1.8));

// CHALLENGE 73
// Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

const peopleWithAgeDrink = (old) => {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
};
console.log("peopleWithAgeDrink ", peopleWithAgeDrink(80));

// CHALLENGE 73
// Special Number (Special Numbers Series #5)
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
// Given a number determine if it special number or not .
const specialNumber = (n) => {
  //your code here
  return String(n)
    .split("")
    .every((num) => Number(num) <= 5)
    ? "Special!!"
    : "NOT!!";
};
console.log("specialNumber ", specialNumber(26));

// CHALLENGE 74
// Balanced Number (Special Numbers Series #1 )
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
// Task
// Given a number, Find if it is Balanced or not.
const balancedNum = (number) => {
  console.log(number);
  return "Do your magic!";
};
console.log("balancedNum ", balancedNum(26));

// CHALLENGE 75
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.
// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
const factorialize = (num) => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
};
const strong = (n) => {
  return String(n)
    .split("")
    .reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + factorialize(Number(currentValue)),
      0
    ) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
};
console.log("strong ", strong(145));

// CHALLENGE 76
//Disarium number is the number that The sum of its digits powered
//with their respective positionsis equal to the number itself.
const disariumNumber = (n) => {
  //your code here
  const arrayedPowerNumbers = String(n)
    .split("")
    .map((element, index) => Math.pow(Number(element), index + 1));
  return arrayedPowerNumbers.reduce((a, b) => a + b) === n
    ? "Disarium !!"
    : "Not !!";
};
console.log("disariumNumber ", disariumNumber(136586));

// CHALLENGE 77
// Jumping Number (Special Numbers Series #4)
// Jumping number is the number that All adjacent digits in it differ by 1.
const jumpingNumber = (n) => {
  //your code here
  const str = n.toString();
  if (str.length === 1) {
    return "Jumping!!";
  }
  let i = 0;
  console.log(str);
  // for (let i = 0; i < str.length; i++) {
  //   return Math.abs(Number(str[i]) - Number(str[i + 1])) === 1
  //     ? "Jumping!!"
  //     : "Not!!";
  // }
  while (i < str.length - 1) {
    console.log(str[i]);
    if (Math.abs(+str[i] - +str[i + 1] === 1)) {
      i += 1;
    } else {
      return "Not!!";
    }
  }
  return "Jumping!!";
};
console.log("jumpingNumber ", jumpingNumber(23));

// CHALLENGE 78
// Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order
// Note:
// if it was the bad timing, the data could be updated during your test cases.
// Try several times if you had such experience.

const getLeaderboardHonor = async () => {
  // your code goes here
  try {
    const URL = "https://www.codewars.com/users/leaderboard";
    const request = await fetch(URL);
    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
console.log("getLeaderboardHonor ", getLeaderboardHonor());

// CHALLENGE 79
// Compare powers
// You certainly can tell which is the larger number between 210 and 215.
// But what about, say, 210 and 310? You know this one too.
// Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?
// Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger,
// 0 if they are equal, 1 otherwise;
// powers to compare will be provided in the [base, exponent] format:
// comparePowers([2,10],[2,15])===1
// comparePowers([2,10],[3,10])===1
// comparePowers([2,10],[2,10])===0
// comparePowers([3,9],[5,6])===-1
// comparePowers([7,7],[5,8])===-1
// Only positive integers will be tested, incluing bigger numbers - you are warned now,
// so be diligent try to implement an efficient solution not to drain too much on CW resources ;)!
const comparePowers = (n1, n2) => {
  //your code here
  console.log(n1, n2, Math.pow(n1[0], n1[1]), Math.pow(n2[0], n2[1]));
  return Math.pow(n1[0], n1[1]) > Math.pow(n2[0], n2[1])
    ? -1
    : Math.pow(n1[0], n1[1]) < Math.pow(n2[0], n2[1])
    ? 1
    : 0;
};
console.log("comparePowers ", comparePowers([3, 9], [5, 6]));

// CHALLENGE 80
// Pick peaks
// In this kata, you will write a function that returns the positions and
// the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
// The output will be returned as an object with two properties:
// pos and peaks. Both of these properties should be arrays. If there is no peak in the given array,
// then the output should be {pos: [], peaks: []}.
const pickPeaks = (arr) => {
  let result = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length; i++) {
    var position;
    if (arr[i] > arr[i - 1]) {
      position = i;
    } else if (arr[i] < arr[i - 1] && position) {
      result.pos.push(position);
      result.peaks.push(arr[position]);
      position = undefined;
    }
  }
  return result;
  //  return {pos:[],peaks:[]}
};
console.log(
  "pickPeaks ",
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);



const arrayOfNumbers = [5, 4, 1, 4, 5, 2, 3, 11, 11, 1 , 3, 5, 5];
let outputz = {};
for(let i = 0; i <= arrayOfNumbers.length; i++){
  if (outputz[arrayOfNumbers[i]] === undefined) {
    console.log('undefined ');
    outputz[arrayOfNumbers[i]] = 1;
  } else {
    outputz[arrayOfNumbers[i]] += 1;
  }
}

let outputzi = {};

arrayOfNumbers.forEach((cur) => {
      console.log('forEACH', cur);
      if (outputzi[cur] === undefined) {
        outputzi[cur] = 1;
        console.log('outputzi', outputzi, outputzi[cur]);
      } else {
        outputzi[cur] += 1;
      }
});
console.log('arrayOfNumbers => ', outputzi);
console.log('arrayOfNumbers => ', arrayOfNumbers, outputz);