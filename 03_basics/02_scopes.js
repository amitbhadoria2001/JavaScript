//in this we are going to see about the scopes > block scopes and Global scopes

var c = 200;
let a = 30

if(true){
    let a = 20;
    var c = 10;

    // console.log(a)
    // console.log(c)
}
// console.log("out-a",a)
// console.log("out-c",c)

//the above is the reason why we dont use var and instead of that we use let and const

function one(){
    const UserName = "Amit"
    function two(){
        const Institute = "Heartfulness"

        // console.log(UserName + Institute)
    }
    // console.log(Institute)
    two()
    //console.log(UserName)


}
one()
//console.log(UserName)

// we can do same in if else 


if(true){
    const userName = "Amit"
    if(userName === "Amit"){
        const website = "Youtube"
        console.log(userName + website)
    }
    //console.log(website)
}
// console.log(userName)

// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++

//when we declare function with the variable we
// cannot access it above and when we didnt store it 
// we can declare its value above

console.log(addOne(1))

function addOne(num){
    return num+1

}


// console.log(addTwo(1))

const addTwo = function(num){
    return num+2
}

