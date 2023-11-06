// Filter

const coding = ["js","ruby","python","java","cpp"]

// const values = coding.forEach( (lang) => {
//     console.log(lang)
//     return lang
    // if we are returing the value then also it is showing unefined.
// } )
// In this when we stroe the for each loop inside the variable and then print that variable 
// we get undefined 

// const values = coding.filter( (item) => {
//     console.log(item) //when we print this without returing it will print and also give us one empty array
//     return item
// })

const myNums = [1,2,3,4,5,6,7,8,9,10]

const values = myNums.filter( (num) => num < 6 )
//we can directly do this without using {} and it want 
// to use the {} then we have to return the value 

//console.log(values)

//we can do this same by using for each loop 

const newNum = []

// myNums.forEach( (num) => {
//     if(num < 6)
//     newNum.push(num) //here we use push to push the values in an empty array 
// })
// console.log(newNum)

const books =[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let myBooks = books.filter( (bk)=> bk.genre === "Fiction" )

myBooks = books.filter((bk)=> {
    return bk.publish >1980 && bk.genre === "Non-Fiction"
    //it we dosent return the value then it will give us the empty array
})
console.log(myBooks)



