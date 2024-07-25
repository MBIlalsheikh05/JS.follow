/*  Stack Memory

oneUser =  "Bilal"
twoUser = oneUser

console.log(oneUser);
console.log(twoUser);

twoUser = "Sheikh"
console.log(oneUser);
console.log(twoUser);
*/

// Heap Memory

obj = {
    name  : "Bilal",
    age : 21
}

objTwo = obj
// console.log(obj);
// console.log(objTwo); 

objTwo.name = "BIlal SHEIKH"
obj.age = 24
// console.log(obj);
// console.log(objTwo); 


