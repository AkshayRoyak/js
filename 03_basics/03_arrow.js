const user={
    username : "Akshay",
    price : 999,
    welcome : function(){
       console.log(`${this.username}, welcome to website`);  // this is current context i.e, iss scope ke andar jitne v variable hai usko access karne ke liye this use karenge 
       console.log(this)
    }

}
// user.welcome()
// user.username="sam"
// user.welcome()
//console.log(this)   // {} empty object in node environment  but in browser global object is window object


function chai(){
    console.log(this)
}
chai()