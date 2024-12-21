// ++++++++++++ NUMBERS +++++++++

// const score = 400
// console.log(score)
// // specifically number

// const balance = new Number(100)
// console.log(balance)
// console.log(typeof balance)  // object
// console.log(typeof score)  // number

// let a=console.log(balance.toString().length)
// console.log(typeof a) 

// const balance = new Number(100)
// console.log(balance.toFixed(2))

// const anotherNumber = 23.8966
// console.log(anotherNumber.toPrecision(3))  // 23.9
// console.log(anotherNumber.toPrecision(2))  // 24
// console.log(anotherNumber.toPrecision(1))  // 2e+1

// const hundreds = 100000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-In'))
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324



// ++++++++++++++  MATHS +++++++++

//console.log(Math)     // object

// console.log(Math.abs(-4))
// console.log(Math.sqrt(4))
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.pow(5,2))
// console.log(Math.min(3,5,2,5,2,5,7)
// )
// console.log(Math.max(3,5,2,5,2,5,7)
// )



// console.log(Math.random())  // values between (0 and 1)
// console.log((Math.random()*10)+1) // +1 to remove 0 in output 
// console.log(Math.floor(Math.random()*10)+1) // round-off to lowest value Math.floor



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min)
