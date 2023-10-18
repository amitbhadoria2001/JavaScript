const marvelHeros = ["thor","Ironman","Superman"]
const dcHeros = ["Batman","flash","Superman"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][0])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);
// console.log(allHeros[3])

//another way to concat both the arrays 

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros)

const anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]
// console.log(anotherArray)

//we use flat method to combine all the sub arrays into one array 
const realAnotherArray = anotherArray.flat(Infinity) //we can also give the value in flat in the place of infinity

// console.log(realAnotherArray);

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"))
console.log(Array.from({name: "Amit"})); //intersting case 

let score1 = 10 
let score2 = 20
let score3 = 30 

console.log(Array.of(score1,score2,score3))