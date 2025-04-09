const thePrompt = prompt(`Print Number From - To`, '5-20');

let arr = [];
if (thePrompt) {
  arr = thePrompt.split('-').map((n) => +n).sort((a, b) => a - b);
};

for (let i = arr[0]; i <= arr[1]; i++) {
  const div = document.createElement('div');
  div.append(i);
  document.scripts[0].before(div);
}

// 02

setTimeout(popUp, 5000);

function popUp() {
  const arr1 = []
  const container = document.createElement('div');
  container.className = "container";

  const h3 = document.createElement('h3');
  h3.textContent = "Welcome";

  const p = document.createElement('p');
  p.textContent = "Welcome to Elzero Web School";

  const button = document.createElement('button');
  button.textContent = "X";

  container.append(h3, p, button);
  document.scripts[0].before(container);
  
  button.onclick = function () {
    container.remove();
  }
}
// 03
// const myDiv = document.querySelector('div');



// let counter = setInterval(function () {
//   myDiv.innerHTML -= 1;
//   if (myDiv.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }, 1000)
// 04
// const myDiv = document.querySelector('div');

// let counter = setInterval(function () {
//   myDiv.innerHTML -= 1;
//   if (myDiv.innerHTML === "0") {
//     clearInterval(counter);
//     window.location.replace('https://elzero.org')
//   }
// }, 1000)
// 05
const myDiv = document.querySelector('div');

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == 5) {
    window.open('https://elzero.org', '', 'width=500, height=500, top=20, left=700')
  } else if (myDiv.innerHTML == 0) {
    clearInterval(counter);
  }
}, 1000)

