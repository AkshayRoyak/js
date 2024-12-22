// arrays

const myArr = [0,1,2,3,4,5]
const myHeroes = ["batman","spiderman"]
const myArr2 =new Array(1,2,3,4,5)
//console.log(myArr2[2])

// myArr.push(6)
// myArr.push(8)
// console.log(myArr)
// myArr.pop()      // remove the last element
// console.log(myArr)



// //myArr.unshift(9)    // add 9 at the starting of array
// myArr.shift()  // removes the starting element from the array
// console.log(myArr)



// console.log(myArr.indexOf(3))
// console.log(myArr.includes(9))   // false


// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof myArr)
// console.log(newArr)  // string
// console.log(typeof newArr)


// slice and splice

// console.log("A",myArr)
// const myNewArr1 = myArr.slice(1,3)
// console.log(myNewArr1)  // last index i.e, 3 is not included
// console.log("B",myArr)  // no change in original array using slice 


console.log("A",myArr)
const myNewArr2 = myArr.splice(1,3)
console.log(myNewArr2) // last index i.e, 3 is also included
console.log("B",myArr) // remove the element passed in the parameters