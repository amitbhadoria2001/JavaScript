//This is Promise One
const promiseOne =  new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('First Task is Completed');
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log("First Promise consumed");
})

//This is Promise Two

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Second task Completed");
    resolve()
  },1000)
}).then(function(){
  console.log("Second Promise consumed");
})

// This is Promise Three

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "Amit" , email: "Amit@google.com"})
  },1000)
}).then(function(user){
  console.log(user);   //by this way we can also define then 
})

// promiseThree.then(function(user){
//   console.log(user); // by this way also we can define then
// })

// This is Promise Four

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username: "Amit" , email: "Amit@google.com"})
    }else{
      reject("ERROR: Something went wrong")
    }
  },1000)
})
promiseFour.then(function(user){
  console.log(user);
  return user.username
}).then(function(username){
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(()=> console.log("The Prmose is Either Rejected or Resolved"))

// This is Promsie Five 

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "Amit" , email: "Amit@google.com"})
    }else{
      reject("ERROR: Something went wrong")
    }
  },1000)
})

async function comnsumePromiseFive(){
    try{
      const response = await promiseFive
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
}
comnsumePromiseFive()

// More Examples of async await

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
  return response.json()
}).then((getting)=>{
  console.log(getting);
}).catch(function(error){
  console.log(error);
})

// promise.all

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});

Promise.all([promise1,promise2,promise3]).then(function(values){
  console.log(values);
}).catch((error)=>{
  console.log(error);
})
