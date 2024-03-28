const userEmail =[]

if(userEmail){
    console.log("Got user email")
} else{
    console.log("DOnt have an email")
}

//falsy values 
// false, 0 , -0, BigInt - 2309n, null,undefined,NaN, ""

//truthy values
// "0","false"," ",{},function(){},[]

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }  to check if we have given an empty array 

const object  = {}
if(Object.keys(object).length === 0){
    // console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined
// thsi is use when we fetch data
// from api and if it returns null nad the other value will be assigned to it 
let val1;
val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 15
let val4 = null ?? undefined ?? 20

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)

// Ternary Operator 
 //condition ? true : false

const hotChocolatePrice = 99

hotChocolatePrice <= 100 ? console.log("less than 100") : console.log("Greater than 100")
