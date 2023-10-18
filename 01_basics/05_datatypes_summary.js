//primitive = when we take the datatype its copy is generated 


//7types : string ,Number, Boolean ,null, undefined,symbol, BigInt

const score = 100;

const number = 100.23

const isLoggedIn = false;

const roomTemp = null;

let emailId;

const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2);

const bigNum = 123458598929384232n

console.log(bigNum)


// non-primitive or reference types 
// Arrays 

const favHeros = ["Batman","shaktiman","Ironman"];
//objects

let myDetails = {
    name: "Amit",
    age: 21,
    email: "amit@gmail.com",
}

let myNewDetail = myDetails;
myNewDetail.age = 20;

console.log(myDetails);
console.log(myNewDetail);


//functions

const myFun = function(){
    console.log("Amit")
}
myFun();
// function return types is known as object function 




