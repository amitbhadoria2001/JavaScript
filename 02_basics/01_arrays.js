const myArr = [0,2,4,6,8,10];
const myHeros = ["Ironman","Batman","Professor"]

const myArr2 = new Array(1,3,4,5,6,7,8);
// console.log(myArr[1])
// console.log(myHeros[2])
// console.log(myArr2[6]);


const arrAmit = [7,0,2,4,5,7,5,7,9];
// console.log(arrAmit)

arrAmit.push(0);
// console.log(arrAmit);

// arrAmit.pop()
// console.log(arrAmit);

arrAmit.unshift(+91)
// console.log(arrAmit) //adds an element in the fron tof an array

arrAmit.shift() //removes an element form the front of an arrya
// console.log(arrAmit)

// console.log(arrAmit.includes(9))
// console.log(arrAmit.indexOf(9))

// const newArray = arrAmit.join()
// console.log(arrAmit)
// console.log(typeof arrAmit)
// console.log(newArray)
// console.log(typeof newArray) //.join converts the array into string and gives string as the output

console.log("A", myArr)
const mynewArr = myArr.slice(1,3);
console.log(mynewArr);
console.log(myArr)

const mynew2 = myArr.splice(0,3);
console.log(mynew2);
console.log(myArr);









