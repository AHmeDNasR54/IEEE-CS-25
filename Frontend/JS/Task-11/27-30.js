
// from 27 to 30

// 01
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(3,4)); // e
console.log(userName.substr(3,1)); // e
console.log(userName.substring(3,4)); // e
console.log(userName.substr(-3,1)); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

// 02


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
