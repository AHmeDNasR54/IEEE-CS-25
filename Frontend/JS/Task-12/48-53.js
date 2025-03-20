// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// for(;start<=100;start+=10)
// {
//     if(start===40)
//         continue;
//     console.log(start);
// }


// 02

// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// for(;start>end;start--)
// {
//     if(start<10)
//         console.log("0"+start);
//     else console.log(start);
//     if(start===3)
//         break;
// }


// 03

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (i = start; i <= end; i++) {
//     console.log(i)
//     for (j = breaker; j < end; j += breaker) {
//     console.log(`-- ${j}`)
//     }
//     }



// 04
// let index = 10;
// let jump = 2;

// for (;;) {
//  console.log(index);
//  index-=jump;
//  if(index<4)
//     break;
// }



// 05
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter=0;
// for(i=0;i<friends.length;i++)
// {
//     if(friends[i][0]!==letter.toUpperCase())
//         console.log(`"${++counter} => ${friends[i]}"`);
// }

// 06

// let start = 0;
// let swappedName = "elZerO";
// let newstr="";
// for(i=0;i<swappedName.length;i++)
// {
//     let k=swappedName[i];
//    newstr+= swappedName[i].toLowerCase()===k?swappedName[i].toUpperCase():swappedName[i].toLowerCase();
// }
// console.log(newstr);

// 07
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// mix.sort();
// for(let i=++start;;i++)
// {
//     if(isNaN((mix[i])))
//         break;

//     console.log(mix[i]);
// }
// console.log( typeof parseInt("a"))
