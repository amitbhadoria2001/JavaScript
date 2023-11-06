const myNum  = [1,2,3,4]
// let acc = 0
// const ans = myNum.reduce( (acc,num)=> acc+num,acc)
//OR

// const ans  = myNum.reduce((acc,num)=>{return acc+num},0)
// console.log(ans)

const shoppingCart = [
    {
        productName : "Soap",
        price: 120
    },
    {
        productName : "Oil",
        price : 480
    },
    {
        productName : "Sunscreen",
        price : 349
    },
    {
        productName : " moisturiser",
        price : 249
    }
]

const total = shoppingCart.reduce((acc,item)=>{
    return acc + item.price 
},0)

console.log(total)