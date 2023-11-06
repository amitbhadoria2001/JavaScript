// Map & Chaining

const myNumber = [1,2,3,4,5,6,7,8,9,10]

//If we are using {} in the map and not returning the value then we will get undefined 
let number = myNumber.map((num)=> {return num+10})
//console.log(number)

/*
We cannot peform the same by using filter 
const newNum = myNumber.filter((num)=> num+1)
console.log(newNum)
*/

//Chaining
let newNum  = myNumber
.map((num) => num * 100 )
.map( (num) => {return num +1} )
.filter( (num) => num < 600 )

console.log(newNum)
