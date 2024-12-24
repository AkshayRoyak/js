// const tinderUser = new Object()    // singleton object
// const tinderUser1 = {}   // non singleton objects
// console.log(tinderUser);   // empty object
// console.log(tinderUser1);  // empty object

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggined = false 

//console.log(tinderUser)


const regularUser = {
    email: "abc@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Akshay",
            lastName : "Roy"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)   //akshay


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

///console.log(target);
// Output: { a: 1, b: 4, c: 5 }
//console.log(returnedTarget === target);
// Output: true


//target is passed directly as the first argument to Object.assign().
//Object.assign() modifies the target object directly because it is the target object.
//The target object and the returnedTarget object both refer to the same object in memory, so changes to one are reflected in the other


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "a", 4: "b" };

const obj3 = Object.assign({}, obj1, obj2);

//console.log(obj3);
// Output: { 1: "a", 2: "a", 4: "b" }
//console.log(obj1);
// Output: { 1: "a", 2: "b" }


// An empty object {} is passed as the first argument to Object.assign(). This creates a new target object.
//The properties from obj1 and obj2 are copied into this new target object.


const obj4 = { 1: "a", 2: "b" };
const obj5 = { 2: "a", 4: "b" };

// spread
const obj6 = {...obj4,...obj5}  // most used
//console.log(obj6)


const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"xyz@gmail.com"
    },
    {
        id:3,
        email:"pqr@gmail.com"
    }
]
//console.log(users[1]);
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser))  // data type : Array
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser)) // all each key values are converted into array 

console.log(tinderUser.hasOwnProperty('isLoggin'));  // false

