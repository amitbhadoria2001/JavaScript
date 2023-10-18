const name = "Amit";
const age = 21;

console.log(`My Name is ${name} and my age is ${age}`);

const gameName = new String('Call-of-Duty')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);

const newString = gameName.substring(0,5);
console.log(newString);

const newString01 = gameName.slice();
console.log(newString01);

const newString02 = " Amit    ";
console.log(newString02);
console.log(newString02.trim());


const url = "https://amit.com/amit%20choudary";

console.log(url);

console.log(url.replace('%20','-'));

console.log(url.includes('amit'));

console.log(gameName.split('-'));

