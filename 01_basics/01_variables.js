const accountId = 124412
let accountEmail = "aryan@email.com"
var accountPassword = "123"
accountCity = "pune"
let accountState;

//if not used var or let , it works normally without initialization

//var and let are used to declare 
//accountId = 2 ->not allowed to change const

/*
prefer not to use var because of issue in block scope 
and functional scope  
*/

accountEmail = "as.com"
accountPassword = 31412
accountCity = "mumbai"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);