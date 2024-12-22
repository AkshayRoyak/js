const marvelHeroes = ["Thor"," Ironman","Spiderman"]
const dcHeroes = ["Superman","Flash","BAtman"]
//marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][2])  // not a good approach


// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

// spread operator
// const all_new_heroes = [...marvelHeroes,...dcHeroes]
// console.log(all_new_heroes)
// console.log(typeof all_new_heroes)



// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array =anotherArr.flat(Infinity)  // removes the sub array inside the array
// console.log(real_another_array)


console.log(Array.isArray("Akshay"))
console.log(Array.from("Akshay"))   // converted to array
console.log(Array.from({name:"Akshay"}))  // returns empty array here we have to tell whether keys ka array banauu ya srif isske values ka array banauu


// convert multiple variables into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  // return a new array from a set of elements