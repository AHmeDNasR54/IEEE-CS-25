// 01
let dateNow=new Date();
let birthDay=new Date("may 17 ,2004");
let diff=dateNow -birthDay;
console.log(diff / 1000); // sec
console.log(diff / 1000 / 60); // min
console.log(diff / 1000 / 60 / 60);  // hour
console.log(diff / 1000 / 60 / 60  / 24); // day
console.log(diff / 1000 / 60 / 60  / 30); // month
console.log(diff / 1000 / 60 / 60  / 24 / 365); // year

// 02

let dateNow2=new Date();
dateNow2.setFullYear(1980,0,1);
dateNow2.setHours(0,0,1);
console.log(dateNow2);

console.log("################");


// 03

let dateNow3=  new Date();
dateNow3.setMonth(7,31);
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(dateNow3);
console.log(`Previous Month is ${monthNames[dateNow3.getMonth()]} and last day is ${dateNow3.getDate()}`);



// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"


// 04

let birthDay2= new Date("may 17 ,2004");
let birthDay3= new Date(2004,4,17);
let birthDay4= new Date(Date.parse("may-17-2004"));
const birthDate5 = new Date(Date.UTC(2004, 4, 17, 0, 0, 0)); // ملاحظة: شهر أغسطس هو 7
console.log(birthDate5.toUTCString());

console.log(birthDay2);
console.log(birthDay3);
console.log(birthDay4);



// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"



// 05



// const startTime = performance.now(); // Record start time

// // Some operation that you want to measure
// for (let i = 0; i < 99999; i++) {
//     console.log(i);
// }

// const endTime = performance.now(); // Record end time
// console.log(`Loop Took: ${Math.trunc(endTime - startTime)} milliseconds`);



// 06


// function*gen(){
//     let index=14;
//     let num=140;
//     let sum = num + index;
// yield index;
// while (true) {
// yield sum;
// sum += num += 200;
// }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

console.log("################################");

// 07
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
function*genAll(){

    let myset=new Set(genNumbers());
    yield* myset;

    let myset2=new Set(genLetters());
    yield* myset2;

}  
  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}


//   08
import calc,{numOne,numTwo,numThree} from "./mod-two.js";
console.log(calc(numOne,numTwo,numThree));

