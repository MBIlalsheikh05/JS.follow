const { Long } = require("mongodb")

const marvel = ["Thor", "IronMan", "SpiderMan"]
const dc = ["SuperMan", "Flash", "Batman"]

// marvel.push(dc)
// console.log(marvel);

// marvel.concat(dc)
// console.log(marvel[3][0]);
// console.log(marvel);

// Concatenate
// const allheros = marvel.concat(dc)
// console.log(allheros);

// const allheros = [...marvel, ...dc]
// console.log(allheros);
// console.log(typeof allheros);
// console.log(typeof dc);


// sub array change into one array
// const recurse_arry = [1,2,3,4, [4,5,6], 3, [4,6,[4,5]]]
// const another_arry= recurse_arry.flat(5)
// // console.log(another_arry);



mbs=
{
    num :1,
    num2:3,
    id: "sp"
}
// console.log(Array.isArray(mbs));
// console.log(Array.from(mbs));
// console.log(Array.from("Bilal"));

num1=1
num2=2
num3=3
console.log(Array.of(num1,num2,num2));


