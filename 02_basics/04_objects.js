// Singleton objects
// const tinderUser = new Object() //it is a singleton Object

const tinderUser = {}  //it is a literal type of declaration of an object

tinderUser.name = "Agastya"
tinderUser.id = "Agee06@gmail.com"
tinderUser.loggedIn = true;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('loggedIn'))

const instaUser = { // we can do nesting in objects and then acces it by dot.
    email: "aniket@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Aniket",
            lastName: "Pakya"
        }
    }
}

// console.log(instaUser.fullname.userFullname.lastName)

const user01 = {
    collegeName: "Apoorv",
    collegeId : "32",
    age: 21
}

const user02 = {
    name: "Ameya",
    email: "Ameya@Google.com",
    
}

const user03 = {
    Fakename: "Aryan",
    Realemail: "Arya@microsoft.com",
    Fage: 22
}

//above we have declare three objects
//now the methods we can use to access the objects 

// const obj4 = {user01,user02,user03} //in this method the problem is there are objects inside objects

// const obj3 = Object.assign({}, user01, user02, user03)
// console.log(obj3)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)

//one more method to acces and mere all the objects is
const user4 = {...user01,...user02,...user03}
// console.log(user4)

//here we got an output error because if the keys of the objects
// are the same then only the keys of the last object is going to
// be printed because it overrites the previous keys so we have
// to always give the name of the keys different 

const user = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"=c@gmail.com"
    }
]

//if we have to acces these objects inside arrays the

const FirstUser = user[0];
// console.log(FirstUser.email)

//above is the way to acces the object elements in the array


///destructuring of the objects

const course = {
    coursename: "js-hidi-youtube",
    coursefee: "9999",
    courseInsturctor: "Pradeep"
}

// course.courseInsturctor > we can access by this format also

const {courseInsturctor: ins} = course
console.log(ins) //this is called destructuring

// how it is done in react

// const navbar =({company}) =>{

// }
// navbar(company = "Amit")

//json
// {
//     "name": "Amit",
//     "rollno":27,
//     "email":"A@gmail.com"
// }

//Api 
[
    {},
    {},
    {}
]
 





      