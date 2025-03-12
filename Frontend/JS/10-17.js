// 01
let num1=10,num2=20;

// Ouput
console.log(num1+""+num2); // Normal Concatenate => 1020
console.log(typeof (num1+""+num2) ); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof `${num1}${num2}`); // Template Literals Way => String

console.log(num1 +"\n"+num2);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${num1}
${num2}`);
/*
  Template Literals Way
  20
  10
*/

// 02

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// 03
console.log("\`I'm in \n \\\\ \n love \\\\ \"\"\" \'\'\' \n \+\+ with \+\+ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"\`\`")

// 04
let a = 21;
let b = 20;

console.log('_'+a+'_'+b+""+a+'_'+b+""+a+'_'+b+""+a+'_'+b+'_'); // _21_2021_2021_2021_20_