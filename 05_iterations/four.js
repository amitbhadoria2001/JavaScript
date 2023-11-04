//for in 

const myObject ={
    js : 'JavaScript',
    cpp: 'C++',
    rb : 'Ruby',
    py: 'Python'
}

for (const codingLang in myObject) {
    // console.log(`${codingLang} shortcut is for${myObject[]}`)  
    // console.log(codingLang + 'is for' + myObject[codingLang])
}
//this is how we access the key and value of the objects by using for in loop

const key = ['js','cpp','rb','java']

for(const newobj in key){
    // console.log(key[newobj]) 
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('UK',"United Kingdom")
map.set('FR',"France") 

for(const key in map){
    console.log(key)
}
// map is not iterable 