const xhttp = new XMLHttpRequest();

xhttp.open("GET", "../JS/01.json");
xhttp.send();
console.log(xhttp);

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhttp.onloadend = function () {
  console.log('Data Loaded');
}