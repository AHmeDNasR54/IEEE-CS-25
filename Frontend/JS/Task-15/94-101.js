// 01
const myLink = document.getElementsByTagName("a");
window.onload = function () {
  for (let i = 0; i < myLink.length; i++) {
    let foundIt =
      myLink[i].classList.contains("open") &&
      myLink[i].textContent === "Elzero";
    if (foundIt) {
      myLink[i].click();
    }
  }
};

// 02
const addingInput = document.querySelector(".assign input[class='classes-to-add'");
const removingInput = document.querySelector(".assign input[class='classes-to-remove'");
const ownerDiv = document.querySelector("div[title='Current'");
const holderDiv = document.querySelector(".assign .classes-list div");

addingInput.addEventListener('blur', function () {
  if (!(this.value === "")) {
    const arr = this.value.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        ownerDiv.classList.add(arr[i]);
      }
    this.value = '';
    holderDiv.innerHTML = '';
    let sorted = ownerDiv.classList.value.split(' ').sort();
    for (let i = 0; i < sorted.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = sorted[i];
      holderDiv.append(span);
    }
  } 
});

removingInput.addEventListener('blur', function () {
  if (!(this.value === "")) {
    const arr = this.value.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        ownerDiv.classList.remove(arr[i]);
      }
    this.value = '';
    holderDiv.innerHTML = '';
    let sorted = ownerDiv.classList.value.split(' ').sort();
    for (let i = 0; i < sorted.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = sorted[i];
      if (span.innerHTML != '') {
        holderDiv.append(span);
      }
    }
  } 
});


// 03
// const div = document.querySelector('div');
// const p = div.nextElementSibling;;

// p.remove();

// const firstDiv = document.createElement('div');
// const fText = document.createTextNode('Start');
// const dataValue = document.createAttribute('data-value');

// firstDiv.className = 'start';
// firstDiv.setAttribute('title', 'Start Element');


// firstDiv.append(fText);
// firstDiv.setAttributeNode(dataValue);
// firstDiv.setAttribute('data-value', 'Start');
// div.before(firstDiv);

// //    ###

// const lastDiv = document.createElement('div');
// const lText = document.createTextNode('End');
// const dataValue2 = document.createAttribute('data-value');

// lastDiv.className = 'End';
// lastDiv.setAttribute('title', 'End Element');


// lastDiv.prepend(lText);
// lastDiv.setAttributeNode(dataValue2);
// lastDiv.setAttribute('data-value', 'End');
// div.after(lastDiv);
//  04
// const div = document.body.firstElementChild;
// const elzero = div.lastChild.nodeValue.trim();
// console.log(elzero);
// 05
const ele = document.body.children;
const eleToArray = Array.from(ele)

eleToArray.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("This Is" + ' ' + element.nodeName); // You can also use element.tagName
  })
}) 