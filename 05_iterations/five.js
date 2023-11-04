//for each - it is the most tused funtion to fetch the values from an array

const coding = ['js','python','java','ruby','cpp']

// In this we do not declare the function name 
// we can use arrow function also

coding.forEach(function (value){
   // console.log(value)
})

coding.forEach( (amit) => {
    // console.log(amit)
})

function printHello(){
    // console.log("Hello Folks")
}
coding.forEach(printHello)

//now applying for each on Objects

const myArray = [
     {
        name: 'Amit',
        rollNo: 27
     },
     {
        name: 'Aryan',
        rollNo: 36
     },
     {
        name: 'Apoorv',
        rollNo:32
     }
]

myArray.forEach((item)=> {
    console.log(item.rollNo)
})