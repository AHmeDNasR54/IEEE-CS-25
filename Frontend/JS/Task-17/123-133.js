// 01

// let setOfNumbers= new Set().add(10);
// setOfNumbers.add(20).add(setOfNumbers.size);
// // console.log(`Set(${setOfNumbers.size}) {${[...setOfNumbers]}}`);
// console.log(setOfNumbers);
// console.log([...setOfNumbers][2]);


// 02

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];


// console.log(Array.from(new Set(myFriends)).sort());
// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']



// 03

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };
//   let myMap=new Map(Object.entries(myInfo));
//   console.log(myMap);
//   console.log(myMap.size);
//   console.log(myMap.has("role"));
//   // Needed Output
// //   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// //   3
// //   true


// 04
// let theNumber = 100020003000;
// console.log(+([...new Set(theNumber.toString())].sort().join("")));
// // Needed Output
// // 123


// 05
// let theName = "Elzero";
// console.log(Array.from(theName));
// console.log([...theName]);
// console.log(theName.split(""));
// console.log([...new Set(theName)]);
// console.log(Object.assign([],theName));

// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']



// 06
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// let schars=[],nchars=[];
// // nchars.sort();
// let count=0;
// for(let i=0; i<chars.length; i++)
// {
//     if(parseInt(chars[i])){
//         count++;
//         nchars.push(chars[i]);
//     }
//     else schars.push(chars[i]);
    
// }
// schars.push(...nchars);

// console.log(schars.copyWithin(count));


// 07

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log([...numsOne,...numsTwo]);
// console.log(numsOne.concat(numsTwo));
// console.log([...Array.from(numsOne),...Array.from(numsTwo)]);
// numsOne.push(...numsTwo)
// console.log(numsOne);


// // Needed Output
// // [1, 2, 3, 4, 5, 6]
// 08

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1, ...n2].length); 

// Needed Output
// 210

