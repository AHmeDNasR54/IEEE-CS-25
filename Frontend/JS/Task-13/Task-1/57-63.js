// function sayHello(theName, theGender) {
//     theGender=="Female"?console.log(`Hello Miss ${theName}`):console.log(`Hello Mr ${theName}`);

// }
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

// 02
// function calculate(firstNum, secondNum=undefined, operation='add') {
//     if(firstNum==undefined||secondNum==undefined)
//     {
//         console.log("all Numbers Not Found");
//         return;
//     }
//     switch(operation){
//         case'add':
//         console.log(firstNum + secondNum);
//         break;

//         case"subtract":
//         console.log(firstNum - secondNum);
//         break;
        
//         case"multiply":
//         console.log(firstNum * secondNum);
//         break;
        
//         default:
//             console.log("Wrong Operation");
//     }
//   }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

// 03

function ageInTime(theAge) {
    if(theAge<=10||theAge>=100)
     console.log("Age Out Of Range");
 else{
     console.log(`Month=>${theAge*12}, Days=>${theAge*365}`);
 }
   }
   
   // Needed Output
   ageInTime(110); // Age Out Of Range
   ageInTime(38); // Months Example => 456 Months
 
 
 //   04
   function checkStatus(a, b, c) {
     let detals=[a,b,c];
     let name,age,availability;
     for(i=0;i<3;i++)
     {
         if(typeof detals[i]=="number")
             age=detals[i];
         else if(typeof detals[i]=="boolean")
             availability=detals[i];
         else name=detals[i];
     }
     console.log(availability==true?`"Hello ${name}, Your Age Is ${age},You Are Available For Hire"`:`"Hello ${name}, Your Age Is ${age},You Are Not Available For Hire"`);
 
   }
   
   // Needed Output
   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
 
 //   05
 
 function createSelectBox(startYear, endYear) {
     document.write(`<select>`);
     for(i=startYear;i<=endYear;i++){
         document.write(`<option value ="${i}">${i}</option>`);
     }
     document.write(`</select>`);
 
 }
   createSelectBox(2000, 2021);
 
//    06
   function multiply(...nums){
     let mult=1;
     for(i=0;i<nums.length;i++)
     {
         if(!isNaN(nums[i]))
             mult*=parseInt(nums[i]);
     }
     console.log(mult);
   }
 multiply(10, 20); // 200
 multiply("A", 10, 30); // 300
 multiply(100.5, 10, "B"); // 1000