
//01
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(10**5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(1e5); // 100000
console.log(100*1000); // 100000
console.log(1e3*1e2); // 100000
console.log(100**2*10); // 100000

// 02

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// 03
console.log(Number.MAX_SAFE_INTEGER %10 +15); 

// 04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseInt(parseFloat(myVar).toFixed(2))); // 100.57

// 05
let num = 10;

console.log(Number.isInteger(num)+ true); 

// 06
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number.isInteger(flt)?flt:parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10

// 07
console.log(parseInt(Math.random()*((4-0+1)+0))); // 0 || 1 || 2 || 3 || 4

