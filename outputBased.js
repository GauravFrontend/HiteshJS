const str = "hello i am gaurav sharma"

const newstr = str.split(" ").map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1)
}).join(" ")


console.log(newstr)



// const numbers = [0,1,2,3,4,5]

// let newarr = numbers.filter((item) =>item<=3).map((item) =>item+5)
// console.log(newarr)

// const user1={
//     name:"john",
//     age:25,
//     address:{
//         city:"munbasi",
//         state:"maharatra"
//     },
// }

// const user2 = user1

// user2.name= "ramers"
// user2.address.city="pune"

// console.log(user1)          //user1 will be overridden beacause it shared it refrence with user2 and user2 overiden it
// console.log(user2)






// console.log({}=={}) // will return false due to diffrent locaitons in memorey 


// console.log([1,3].toString()  ==[1,3].toString()) // false because diffrent refrence 



// async function foo(){
//     return "hello"
// }
// async function too(){
// const resuult = await foo()
// console.log(resuult)

// }
// too();