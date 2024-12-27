var c =100
// scope or code written in outside is GLOBAL SCOPE
// scope or code written in if statement is BLOCK SCOPE
if(true){
    let a = 10
    const b = 20
    var c = 30
    d=1000
}
//console.log(a);   // error due to use of let
//console.log(b);    // error due to use of const
//console.log(c);     // 30 (var)
//console.log(d); 

//use of var can be a issue in the program



let k=100
if(true){
    let k= 900
    console.log("Inner :",k)   // block scope
}
console.log("Outer :",k)   // global scope