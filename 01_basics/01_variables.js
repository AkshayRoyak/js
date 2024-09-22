const accountId=144553;
let accountEmail="abc.@gmail.com";
var accountPassword="12345";
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountCity="Dheradhun";
let accountStates;
//accountId=2
accountEmail="xyz@gmail.com";
accountPassword="54321";
accountCity="banglore";
console.table([accountId,accountEmail,accountCity,accountPassword,accountStates]);
