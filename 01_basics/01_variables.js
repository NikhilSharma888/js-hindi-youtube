const accountId = 112233
let accountEmail = "nik@google.com"
var accountPassword = "565656" 
accountCity ="Gorakhpur"
let accountState;
// accountId = 44 // not allowed because accountId is a constant variable

accountEmail = "haha@d.com"
accountPassword = "5858"
accountCity = "jaipur" 

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// done aaise he likha hu chnges ke liye //