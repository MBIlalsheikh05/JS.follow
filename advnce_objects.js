const vsUsers = new Object(); // can creae obj like this 
// const vsUsers = {}

vsUsers.name = "Bilal"
vsUsers.language = "JavaScript"
vsUsers.extension = "code Runner"
//console.log(vsUsers); 

const regularUser = {
    email : "mbs@gmail.com",
    fullName:{
        userfullName :{
            firstName:"M",
            lastName: "Bllal"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.userfullName.lastName);
// console.log(regularUser.fullName?.userfullName.lastName);
// ? IF ELSE CONDITION APPLY 

const obj1 = {a: 1, b:2}
const obj2 = {c: 3, d:4}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
const obj3 = {...obj1, ...obj2} // Spread Objects
//console.log(obj3);

// WE can add multiple objects in a single Array like 
 const array = [
    {fname : "Bilal"},
    {lname : "Sheikh"},
    {id : "sp23-bscs-0090"}
 ]
//  console.log(array[2].id);
//  console.log(array[2]);

// console.log(vsUsers);
// console.log(Object.keys(vsUsers));
// console.log(Object.values(vsUsers));
// console.log(Object.entries(vsUsers));
// console.log(Object.hasOwnProperty('name')); //check the property is available


// ============== Object De-structuring ==================

const course = {
    courseName: "DSA",
    price: 222,
    CourseInstructor: "Dijekstra"
}
// console.log(course.courseName);
const {price: p} = course   
// price => p this is objct de structure through curly braces
console.log(p); 









