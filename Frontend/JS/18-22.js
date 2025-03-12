// 01
// Replace ? With Arithmetic Operators
console.log(10 * 20 -(15 % 3 )+ 190 +10 - 400); // 0

//02
let num = 3;

// Solution One
console.log(num*(+true + +true)); // 6

// Solution Two
console.log(num+num); // 6

// Soultion Three
console.log(num+(+true*3)); // 6

// Soultion Four
console.log(++num + ++num / num + ++num/num); // 6

// Solution Five
console.log(num); // 6

// Solution Six
console.log(--num + num / num); // 6

// 03
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2*(+true + true)); // 20

// Solution Three
console.log(+num2++*(+true + true)); // 20

// Solution Four
console.log(num2 +num2 -(true + true)); // 20

// 04
let points = 10;

// i got no other solutions rather than incrementing and decrementing
++points
++points
++points

console.log(points); // 13

--points
--points
--points
--points
--points

console.log(points); // 8;