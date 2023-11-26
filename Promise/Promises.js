//promises create or consume hote hai , 2 parts hote hai isme
//below is creation of promises
const promiseOne = new Promise((resolve, reject) => {
    //do an async task
    //db calls, network calls 
    setTimeout(() => {
        console.log("async task in completed");
        resolve()
    }, 1000)
})

// below is consumption 

promiseOne.then(() => {
    console.log("Promise Consumes")
});
// ---------------------------------------***-------------------------

const Promisetwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async Task 2")
        resolve()// ye connection hai .then se isme data bhi pass krskte hai 
    }, 1000);
}).then(() => {
    console.log("async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;//error handling
        if (!error) {
            resolve({ username: "hitesh", passward: "123" })
        } else {
            reject("ERROR: something went wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((useee) => { console.log(useee) })
    .catch((err) => {
        console.log(err)
    }).finally(() => { console.log("promise chl gya ya to kuch or hogya") })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;//error handling
        if (!error) {
            resolve({ username: "Gaurac", passward: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();

async function getAllusers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response, resolve) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err) =>console.log(err));

//-----------------------END---------------------------