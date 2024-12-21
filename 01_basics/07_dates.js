//dates

// let myDates = new Date()
// console.log(myDates) //2024-12-21T11:30:54.427Z
// console.log(myDates.toString()) //Sat Dec 21 2024 11:30:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDates.toDateString())  //Sat Dec 21 2024
// console.log(myDates.toISOString()) //2024-12-21T11:30:54.427Z
// console.log(myDates.toLocaleDateString()) //12/21/2024
// console.log(myDates.toLocaleString())  //12/21/2024, 11:30:54 AM
// console.log(myDates.toTimeString()) //11:30:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDates.toJSON()) //2024-12-21T11:30:54.427Z

// console.log(typeof myDates)


//let myCreatedDate = new Date(2024,0,25,5,45)
// let myCreatedDate = new Date("2024-12-21")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toDateString())


let myCreatedDate = new Date("2024-12-21")
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Date.now()/1000)