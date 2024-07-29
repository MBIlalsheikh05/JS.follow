const mysybmol1 = Symbol("Key1")
const mysybmol2 = Symbol("Key2")
const mysybmol3 = Symbol("id")
const mysybmol4 = Symbol("id")
const obj = {
    name: "Bilal",
    "last Name": "Sheikh",
    age : 15,
    email: "mbilalsheikh05@gmail.com",
    isLogin: true,
    last_login_details : ["Monday", "Saturday"],
    // [id]: "SP23",
    "key1": "0090",
    "Key2": "0080",
    "Key3": "0072",
    [mysybmol3]:"0098"

}

// console.log(obj.age);
// console.log(obj.email);
// console.log(obj["email"]);
// console.log(obj.name,obj["last Name"]);
// console.log(typeof obj["last Name"]);
// console.log(obj.mysybmol);

// console.log(obj);
// console.log(obj.key1);
// console.log(obj.mysybmol3);
// console.log(obj.Key3);
// Object.freeze(obj)
// obj.email= "sheikh09@gmail.com"
// console.log(obj);

obj.greeting = function(){
    console.log("Hi, Hp fam");
}

obj.greeting1 = function(){
    console.log(`Hi, ${obj.name} ${this["last Name"]}`);
    console.log(`Hi, ${this["last Name"]}`);
}
// console.log(obj.greeting());
console.log(obj.greeting);
console.log(obj.greeting1());







