//Declaration of the function

function sayMyname(){
    console.log("Amit")
}
// sayMyname()

function addingNum(number1,number2){

    // let result = number1+number2
    // return result
    return number1+number2
}

// console.log(addingNum(20,10))

function loginUserMessage(UserName ="Deafult"){
    if(!UserName){
        console.log("Enter the Username sike")
        return

    }
    return `${UserName} Logged In`
} 
// console.log(loginUserMessage())

function shoppingCart(val1,val3,...num1){
    return num1
}
// console.log(shoppingCart(1222,312,434,423))

//Declaring objects inside the function 
const user ={ 
    name: "Amit",
    age: 21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

//handleObject(user)
//above an dbelow are the two ways to declare a object when calling a function
// handleObject({
//     name:"Singh",
//     age : 21
// })

// Declaring Strings inside the Function

const myArr = [1,2,3,4,5,6]

function declaringFunction(anyArray){
    return anyArray[1]
}
// console.log(declaringFunction(myArr))

//or we can diclare the array directly when calling the function

console.log(declaringFunction([100,200,300]))
