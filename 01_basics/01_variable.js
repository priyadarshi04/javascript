const accountId = 1445
let accountEmail = "rajeev.11aug@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

// accountId = 2 //not allowed

accountEmail = "rajeevpoddar@gmail.com"
accountPassword = "21221212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of 
issue in block scope and functional scope

*/
console.table([accountId,accountEmail, accountPassword,accountCity,accountState])