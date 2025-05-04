class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        console.log("Car is Running Now");
        
    }
    stop(){
        console.log("Car is stopped");
        
    }
}
  let car1=new Car("MG","MG","420000$");
  let car2=new Car("عربية","Marcides","160$");
  let car3=new Car("عربية","FERRARI","150$");
  // Needed Output
  console.log(`Car one Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
  car1.run();
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"


// 02


class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  
class Tablet extends  Phone{
    constructor(name, serial, price,size){
        super(name, serial, price);
        this.size= size ||"Unknown";
    }
    fullDetails(){
        return(`${this.name} Serial is ${this.serial} And Size is ${this.size}`);
        
    }
}  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown




// 03



// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    getCreditCard(){
        return this.#c.toString().match(/\d{4}/ig).join("-");
    }
    get showData(){
        return (` Hello ${this.u} Your Credit Card Number Is ${this.getCreditCard()}`);
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined




  
//   04

String.prototype.addLove=function(){
    return (`I Love Elzero Web School`);
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School





// 05
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
Object.defineProperties(myObj,{
    score :{
        writable:false,
    },
    id:{
        enumerable:false
    },
   
});  
  myObj.score = 500;
  delete myObj.country;
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}