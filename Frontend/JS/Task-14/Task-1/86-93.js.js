// let mydiv=document.querySelector(".element");
// let mydiv2=document.querySelector("div");
// let mydiv3=document.querySelector("[name='js']");
// let mydiv4=document.querySelector("#elzero");


// 02


// let myimg=document.querySelectorAll("img");
// for(let i=0;i<myimg.length;i++){
//     myimg[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myimg[i].setAttribute("alt","Elzero Logo");
//     myimg[i].style.backgroundColor="red";
// }


// 03

// let inp=document.querySelector("input");
// // inp.setAttribute("value","0");
// let invalue=inp.getAttribute("value");
// let resl=document.querySelector(".result");
// let form = document.getElementsByTagName("form");

// // resl.textContent=`{${invalue}} USD Dollar = {${(invalue*15.6).toFixed(2)}} Egyptian Pound`;

// // inp.addEventListener('input',function (){
// //  let invalue=inp.value;
// //  if (invalue === '') {
// //     resl.textContent = '';
// // } else {
// //  resl.textContent=`{${invalue}} USD Dollar = {${(invalue*15.6).toFixed(2)}} Egyptian Pound`;
// // }
// // });

// inp.oninput=function (){
//     let invalue=inp.value;
//     if (invalue === '') {
//        resl.textContent = '';
//    } else {
//     resl.textContent=`{${invalue}} USD Dollar = {${(invalue*15.6).toFixed(2)}} Egyptian Pound`;
//    }
//    };

//  form[0].style.cssText="background-color: darkgoldenrod; display: flex; flex-direction: column; align-items: center; border: 1px solid black;padding: 15px; width: fit-content;";
// inp.style.cssText ="border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
// resl.style.cssText ="margin-top: 10px; color: rgb(57, 4, 110); font-size: 18px;";

// 04
// let div1=document.querySelector(".one");
// let div2=document.querySelector(".two");

// let temp=div1.title;
// div1.title=div2.title;
// div2.title=temp;
//  temp=div1.textContent;
// div1.textContent=`${div2.textContent}`;
// div2.textContent=`${temp}${++div2.childNodes.length}`;

// console.log(temp);

// 05

// let img=document.querySelectorAll("img");

// for(i=0;i<img.length;i++)
// {
//     if(img[i].hasAttribute("alt"))
//         img[i].setAttribute("alt","Old");
//     else img[i].setAttribute("alt","Elzero New");

// }


// 06

let num=document.querySelector("[name='elements']");
let text=document.querySelector("[name='texts']");
let create=document.querySelector("[name='create']");
let res=document.querySelector(".results");
let form =document.querySelector("form");
form.onsubmit=function(e){
    e.preventDefault();
    }
create.onclick=function(){
    res.innerHTML=null;
    console.log(num.value)
    for(i=0;i<num.value;i++)
    {
    let created=document.createElement("div");
    created.textContent=`${text.value}`;
    created.setAttribute("class","box");
    created.setAttribute("title","Element");
    
        res.appendChild(created);
        res.children[i].setAttribute("id",`id-${i+1}`);
    }
   
}


