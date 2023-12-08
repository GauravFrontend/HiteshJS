const arr = [1,2,3,4,5,6,7]
//below is for of loop
for (const i of arr) {
    // console.log(i)
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps array jese hi hote hai conatis unique values (koi duplicate value nhi)
// map object hai isliye new keyword lgya or ye hold krta hau {key:value} pair 
// original order ko yaad rkhta hai , normal objects order yaad nhi rkh pate
const map = new Map()
map.set("IN","india")
map.set("fr","france")
map.set("USA","united states of america")
map.set("fr","france")

for (const [key , value] of map) {
    // console.log(key,value)
    
}

const myObject = {
    game1:"nfs",
    game2:"spiderman",
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

// for (const ob of myObject) {
//     // console.log(ob)  ************for of doenst work on objects*****************
// }

// ************** FOR IN LOOP USEFULL FOR Object *********************

// for (const key in myObject) {
//   console.log(`${key} is for ${myObject[key]}`)
// }


const Prog = ["js","rb","ye","java","cpp"]

// for (const key in Prog) {
//   console.log(Prog[key]);
// }

// for (const key in map) {
//    console.log(key)
// }

// main bat object pr forin Array pr forof 
// below is foreach loop 

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach((e) => {console.log(e)})


function printMe(item) {
    // console.log(item)
}
coding.forEach((item , index , arr) => {
    // console.log(item ,index, arr);
})
//for each k pass item hota hai uska index hota hai or pura array hota hai 

const mycoding =[
    {
        languagename:"javascript",
        langfilename:"js"
    },
    {
        languagename:"python",
        langfilename:"py"
    },
    {
        languagename:"golang",
        langfilename:"gl"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename)
})