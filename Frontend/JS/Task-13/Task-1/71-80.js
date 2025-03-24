// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newstr=mix.map(function(ele){
//         return  typeof ele!=="number"?ele:"";
// }).reduce((acc,curr)=>acc+curr);
// console.log(newstr);


// // 02
// let myString = "EElllzzzzzzzeroo";

// // Elzero
// let news=myString.split("").filter( function (ele,indx,arr){
//     if (indx>0 && arr[indx-1]===ele)
//         return"";
//     else return ele;
// }).join("");
// console.log(news);


// // 03
// let myArray1 = ["E", "l", "z", ["e", "r"], "o"];

// // Elzero
// let newarr=myArray1.reduce((acc,ele)=> acc + (Array.isArray(ele)?ele.join(""):ele));

// console.log(newarr);
// // flat
// const flatArray = myArray1.flat();
// console.log(flatArray); // Output: [1, 2, 3, 4, [5, 6], 7]



// 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let generatedArr=numsAndStrings.filter((ele)=>!isNaN(ele)).map((ele)=>-ele);
console.log(generatedArr);


// 05
let nums = [2, 12, 11, 5, 10, 1, 99];

let newcalc=nums.reduce((acc,ele)=>ele%2==0?acc*ele:acc+ele,1);
console.log(newcalc);
// 500