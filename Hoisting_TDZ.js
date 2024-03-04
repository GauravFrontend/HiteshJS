// let and const are in the temporal dead zone ( TDZ )
// the time between hoisted and intilzed that is called temporal dead zone 
// hoisting
//we can access var before even intilizing it 
// memory is acclocated to these varibles and functions before any line of code - undifined
let a=89; // let and const they are allocated memory but they are stored in sperate memory space than global
console.log(a)
var b = 100; // var is attached to global object

// var can be overriden and can be changed
// let can be overriden and can be assigned value later on
// const expects you to intizile value in same line

//in let and const - there is something known as temporal dead zone 

