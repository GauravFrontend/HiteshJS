const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})

// console.log(values)

//below filter operation 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNumbs = myNums.filter((items) => {
//     return items>4
// })
// console.log(newNumbs)

const newNumbs = []
myNums.forEach((num) => {
    if (num > 3) {
        newNumbs.push(num)
    }
})
// console.log(newNumbs)

const books = [
    {
        name: "The Lord of the Rings",
        genre: "Mystery",
        publishYear: 1954
    },
    {
        name: "To Kill a Mockingbird",
        genre: "Historical Fiction",
        publishYear: 1960
    },
    {
        name: "Pride and Prejudice",
        genre: "Mystery",
        publishYear: 1813
    },
    {
        name: "The Adventures of Sherlock Holmes",
        genre: "Mystery",
        publishYear: 1892
    },
    {
        name: "The Catcher in the Rye",
        genre: "Coming-of-Age",
        publishYear: 1951
    }
];

const userBooksgenre = books.filter((items) => {

    return items.genre === "Mystery"

})
const userBooks = books.filter((items) => {

    return (items.publishYear >= 1950 &&
        items.genre === "Mystery")

})
// console.log(userBooks)


const my2ndNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNumss = my2ndNumbers.map((items) => {
//     return items + 10
// })


const newNumss =my2ndNumbers.map((num) => num * 10)
                            .map((num) => num+3)
                            .filter((num) => num>40 )

// console.log(newNumss)

const my3nums = [1,2,3,4,5,6]

const mytotal = my3nums.reduce((acc,currval) => {
    // console.log(`acc: ${acc} and curr: ${currval}`)
    return acc + currval
},2)

// console.log(mytotal)

const cources = [
    {
        itemname:"js",
        price:3222
    },
    {
        itemname:"py",
        price:1222
    },
    {
        itemname:"ruby",
        price:5000
    }, {
        itemname:"android",
        price:12000
    }
    
]

const priceadd = cources.reduce((acc,curr) => {
    return acc+curr.price
},0)

console.log(priceadd)