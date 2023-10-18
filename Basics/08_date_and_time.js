let myDate = new Date();

// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toTimeString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

let myNewDate = new Date(2001,6,30,4,30);
// console.log(myNewDate.toLocaleString());

let timeStamp = Date.now();

console.log(timeStamp);
console.log(myDate.getFullYear());
console.log(myDate.getDate());


myDate.toLocaleString(`deafult`,{
    weekday: "long",
    day: "numeric",
})

console.log(myDate);


