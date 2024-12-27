function sayMyName(){
    console.log("A")
    console.log("k")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("y")
} 

//sayMyName   // reference
//sayMyName() // execution

// function addTwoNumber(number1, number2){
//    console.log(number1 + number2);
// }
// //addTwoNumber()  //NaN
// const result = addTwoNumber(3,8)
// console.log("Result is: ",result)  // undefined 

function addTwoNumber(number1, number2){
   let result = number1 + number2
   return result
   // return number1 + number2
}
const result = addTwoNumber(5,8)
//console.log("Addition is : ",result)


function loginUserMessage(userName="sam"){  // giving username = "sam" as defult value if the argument is empty them sam will be printed
    if(userName===undefined){
        console.log("Please enter your user name")
        return
    }
    //or
    // if(!userName){
    //     console.log("Please enter your user name")
    //     return
    // }
    else{
        return `${userName} just loggedin`
    }
    
}
//console.log(loginUserMessage("Akshay"))
//console.log(loginUserMessage(""))
//console.log(loginUserMessage())  // undefined if value is not passed


function calculatePrice(num1){
    return num1
}
//console.log(calculatePrice(2))      // 2
//console.log(calculatePrice(2,200))  // 2


function calculatePrice1(...num2){
    return num2
}
//console.log(calculatePrice1(2))      // [2]
//console.log(calculatePrice1(2,200,400))  // [2,200,400] gives an array using rest operator i.e,(...num2)


// how objects is passed into functons and how it is used
const user1 ={
    username:"Akshay",
    age:20
}
function handleObjects(anyObject){
   // console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
    
}
handleObjects(user1)


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))