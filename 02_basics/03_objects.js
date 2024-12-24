// singleton

//literals ke tarah declare karte hai to singleton nhi banega but constructor se hamesha singleton banega



//Object.create     // declare through constructor method


// objects literals (objects declare format )


const mySym = Symbol("Key1")
const mySym1 = Symbol("key2")

const jsUser = {
    name:"Akshay",
    "fullName": "Akshay Kumar Roy",
    mySym : "mykey1", // not used as symbols
    [mySym1] : "mykey2",
    age : 20,
    location : "Dehradhun",
    email : "abc@gmail.com",
    isLoggedIn : false,
    last_login_days : ["Monday","Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["fullName"])  // since in full name is defined as string so we cannot access the value from js.fullname so this is another syntax
// console.log(jsUser["email"])


// console.log( jsUser.mySym)
// console.log(typeof jsUser.mySym)

// console.log( jsUser[mySym1])
// console.log(typeof jsUser[mySym1])

jsUser.email="xyz@gmail.com"
//console.log(jsUser)

//Object.freeze(jsUser)

//jsUser.name="Ak Roy"
//console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello Js User");
}

//console.log(jsUser.greeting);   // [Function(anonymous)]
//console.log(jsUser.greeting());  //error not a function

jsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`)
}
console.log(jsUser.greeting2)
console.log(jsUser.greeting2())
