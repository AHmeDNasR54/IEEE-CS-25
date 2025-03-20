// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(false,length-true)); // ["Ahmed", "Elham", "Osama"];
// // Method 2
// console.log(myFriends.slice(false,myFriends.indexOf("Gamal"))); // ["Ahmed", "Elham", "Osama"];

// 02

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();friends.shift();
console.log(friends); // ["Eman", "Osama"]

// 03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr=arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// 04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-true][0].slice(words[words.length-true][0].indexOf("z")).toUpperCase()); // ZERO


// 05 

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle))
    console.log("Found");
if(haystack[1]===needle)
    console.log("Found");
if(haystack.indexOf(needle)==1)
    console.log("Found");


// 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=allArrs.concat(arr1[arr1.length-true],arr2.slice(arr2.indexOf("F"))).sort().join("").toLowerCase();
console.log(allArrs); // fxy