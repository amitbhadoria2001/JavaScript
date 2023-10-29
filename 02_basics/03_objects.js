// Their are two types of objects singleton and literals 
//both are declared differently 

// Objects literals 

const sym = Symbol('myKey')

const JsUser = {
    name: "Amit",
    [sym]: "mykey",
    "full name": "Amit Singh",
    age: 21,
    Location: "Betul",
    email: "amit@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.sym)
JsUser.email = "Singh@gmail.com"
// Object.freeze(JsUser). //use to freeze the object so it cannot be changed 
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hey its a function ")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())








