//for of 
// mostly used for 
// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,6]

for (const myArray of arr) {
    // console.log(myArray)
} // this is how we use for of in array

const greetings = "Good Morning have a great day!"
for(const greet of greetings){
    if(greet ==" "){
        //console.log("hi folks! I'm Space")
        continue;
    }
    //console.log(`Each char is ${greet}`)
} //this is how we use for of array in Strings

//maps 

const map = new Map() //this is the declaration of the map 
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('UK',"United Kingdom")
map.set('FR',"France") //it does not print the duplicate values
//map prints all the values in order
// maps and function are almost the same but the above two are the difference in them
//console.log(map)

// from this we can print the key value pairs of a map function form for off loop
for(const [key, values] of map){
    console.log(`${key} is refered for ${values}`)
}

const myObject ={
    game1 : 'Call of Duty',
    game2: 'NFS'
}

// for(const [key,value] of myObject) {
//     console.log(`${key} and ${value}`)
// }

//by this output we can see that the object is not iterable from the for of loop