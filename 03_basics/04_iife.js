// Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`DB Connected.`)
// }
// chai()

//another way of of doing this is 

(function sandWhich(){
    console.log(`Chai Peelo`)
}) ();  //it is known as named iife

( (userName) => {
    console.log(`${userName}, Chai Peelo`)
}) ("Amit") //it is know as normal iife

//we use this to avoid the pollution of the global context/Scope and to execute function immediately