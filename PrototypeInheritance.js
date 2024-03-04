// arr.length .filter. push , how is this getting this info
// here is when prototype comes in picture 
// javascript automatically attaches your arrays and objects with these properties and functions

//puts allthat hidden properties in a object and attaches your object with that

const arr=["heoo","hii"]
const obj = {name:"hee",age:33}
arr.__proto__
obj.__proto__
arr.proptotype//it is same as above


