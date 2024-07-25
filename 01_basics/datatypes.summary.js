/* 
Primitive Data types 
7 types : string, number, boolean, Null(empty), undefiend, symbol, bigint, 

Reference type(non primitive)
Array , objects, functions
*/

const num = 199
const num1 = 199
const temp = Symbol("45")
const temp1 = Symbol("45")
// console.log(temp===temp1)
// console.log(num===num1)

const arry = ["Bilal ", "Sheikh"];
console.log(arry);

let myObject = {
    name : "Bilal",
    age : 21,
}

// console.log(typeof myObject);
// console.log(myObject);

// let name;
function prnt(name){
    console.log(name + " Hello World");
}

function funt(age) {
    console.log(age + " Bilal");
}


funt(21)
prnt("Bilal")

const check  = function check1 () {
    num == num1
}

console.log(check());