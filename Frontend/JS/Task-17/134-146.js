// 01
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let re = /\d{4}:\w{3}:(\d{4}:){5}\d{4}/g;

// console.log(ip.match(re));

// 02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regEx = /\bos\d*o\b/ig;
console.log(specialNames.match(regEx));

// Output
// ['Os10O', 'OsO', 'Os100O']

// 03


// let phone = "+(995)-123 (4567)";
// const regEx = /\+\(\d{3}\)-[0-9]{3}\s\(\d{4}\)/g;

// console.log(phone.match(regEx));


// 04

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;


// https?: it means that (s) is optional.
//  :\/\/ = those are normal characters, they will follow http or https if s is found.
// (?:[-\w]+\.)? = this group is optional. can be found or not.
// ?: = this defines non-capturing group.
// [-\w]+ = this range will get anything in the group the order is not important.
// the + means it can repeat unlimited times.
// \. = this will get any Character [a-zA-Z0-9_]
// ([-\w]+) = this is group
// * zero or more.
// i = case-insensitive.


// 05

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d+\s?\W?\s?\d+\s?\W\s?\d+/g; // Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"



// 06
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(?:https?:\/\/)?(?:\w+\.)?[\w\-]+\.\w+(?:.+)?/i; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

