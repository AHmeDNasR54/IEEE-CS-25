// // from 33 to 37

// console.log("033 ###########");
// // Test Case 1
// let num5 = 9; // "009"
// if(num5<10)
//     console.log("00"+num5)
// // Test Case 2
// let num3 = 20; // "020"
// if(num3>10&&num3<100)
//     console.log("0"+num3)

// // Test Case 3
// let num4 = 110; // "110"
// if(num4>=100)
//     console.log(num4)


// Edit What You Want Here

let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
