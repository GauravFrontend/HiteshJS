
    // Question no-1;
    function sum(a) {
        return function (b) {
            return function (c) {
                return function () {
                    return a + b + c
                }
            }
        }
    }
    console.log(sum(1)(2)(3)());

    // Question no-2;
    // created getName and getAge which are promises inside a function
    function getName() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("getNameCalled")
            }, 1000)
        })
    }


    function getAge() {
        return new Promise(function (res, rej) {
            setTimeout(function () {
                const age = 25;
                res(age);
            }, 1300);
        });
    }

    // rewritten this function using .then and .catch for errors
    function main() {
        return getName()
            .then(function (name) {
                console.log(`Hello ${name}!`);
                return getAge(name);
            })
            .then(function (age) {
                const drink = age < 10 ? "milk" : "coke";
                console.log(`Have a ${drink}.`);
                const child = age < 10;
                return child;
            })
            .catch(function (e) {
                console.log('Error');
                return null;
            });
    }
    main();


    //Question - 4 used spread operator to push values which array on particular index, if on index three there was a array then it will spred that and push it to flatted variable

    const myArray = [1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]

    function arrayFlattner(arr) {
        var flatted = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatted.push(...arrayFlattner(arr[i]));
                console.log(arr[i])
            } else {
                flatted.push(arr[i]);
            }
        }
        return flatted;
    }

    console.log(arrayFlattner(myArray));

    //Question 5 - created a publish and subscribe function in publish it sets the value of subscriptions[event] and for each event sends a callback function
    const subscriptions = {};

    function publish(event, value) {
        const eventSubscriptions = subscriptions[event];
        if (eventSubscriptions) {
            eventSubscriptions.forEach(callback => callback(value));
        }
    }

    function subscribe(event, callback) {
        if (!subscriptions[event]) {
            subscriptions[event] = [];
        }
        subscriptions[event].push(callback);
    }



    subscribe('event1', function (value) {
        console.log('1', value);
    });

    subscribe('event1', function (value) {
        console.log('2', value);
    });

    subscribe('event1', function (value) {
        console.log('3', value);
    });

    publish('event1', 'hello world');
