// primitive 
/* primitive datatypes are call by values
 jab v hum iise khai se khai copy karte hai
 too isska jo original data hai wo reference memory 
 ka ni diya jata hai inko copy kar ke diya jata hai alag aur jo changes hum karte hai wo inn copy wale me changes hota hai
*/
/*7 category(types): 
1. string
2. Number
3. Boolean
4. Null (null doest means zero it is just empty)
5. Undefined (variable declaration is done but value is not decided)
6. Symbol ( kisi v value ko unique banane ke liye symbol use hota hai)
7. BigInt (scientific value or larger number)
*/

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId)

const bigNumber = 376386281639231387127363232648236981n

console.log(bigNumber)

//          Reference Type/ Non-primitive datatypes
/*
non-primitive - ye sari value wo hai jo ki memory me inka reference aapko directly allocate kiya ja sakta hai
1. Array
2. Objects
3. Functions 
*/

const heros=["shaktiman","doga","naagraj"];

const myObj = {
    name: "Akshay",
    age: 20
};
console.log(myObj.name)
 // function ko v js me variable ke tarah treat kar sakte hai
 const myFunction = function(){
    console.log("hello world");
 }
 console.log(typeof myFunction)

/*
Statically typed: c,c++,java (compiler)
 here we have to defined the type of data that we are going to use i.e, 
 char ch='a'; 
 int a=50;
 because compiler optisimized machine code banata hai to optismized machine code banane ke liye usse pata hona chaheye ki varible ka type kia hai
Dynamically types: python , javascript (intepreter)
here we dont have to defined the type of data
let age=34;
or 
age=34;

jab interpreter line by line execute karega to wo khud he type assign kar dega
*/