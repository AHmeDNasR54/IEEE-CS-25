// 02
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontWeight="bold";
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily="Arial";
// 03
console.log("%c Elzero %c Web %c School","color:red;font-size:40px;","color:green;font-size:40px;font-weight:bold;","color:white;font-size:40px;background-color:blue;");

console.log("######################");
// 04
console.groupCollapsed("Group 1");
console.log("Message 1");
console.log("Message 2");

console.groupCollapsed("Child Group");
console.log("Message 1");
console.log("Message 2");


console.groupCollapsed("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.groupEnd();

console.groupEnd();
console.groupCollapsed("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
// 05

console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);

// ###################### 06
console.log("Iam In Console");
document.write("Iam In Page");