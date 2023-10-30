const user = {
    userName:  "Amit",
    rollNo: 27,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to Website`)
        // we have to declare this to use the above objects key
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Singh"
// user.welcomeMessage()

// console.log(this) //it is empty

// function chai(){
//     let userName = "Amit"
//     //console.log(this.userName) //it is showing undefined because it dosent know this username
//     console.log(userName)
// }
// chai()

//it will be same if be declare function differently 

// const chai = function(){
//     let userNme = "Amit"
//     console.log(this)
//     //console.log(userNme)
// }
// chai()

// now we will declare the arrow function 

const chai = () => {
    let userName = "Amit"
    console.log(this)

}
// chai()

// IMP = both the arrow function and the regular function is returning different output because
// regular function = it creates its own this context. In this case, because you're directly calling the function,
// this will refer to the global object, which is usually window in a browser environment.
// So, console.log(this) will print the global object.

// arrow function = Arrow functions do not have their own this context. They inherit the this value from their surrounding
// scope. In this case, the surrounding scope is the global context
// (since the function is defined in the global scope). 
//Therefore, this inside the arrow function still refers to the global object.

// const addTwo = (num1,num2) => {   
//     return num1+num2
// }
// console.log(addTwo(5,5))

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({userName: "Singh"})
console.log(addTwo())

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()






