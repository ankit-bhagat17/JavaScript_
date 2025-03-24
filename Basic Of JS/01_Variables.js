const accountId =  14444;
let accountEmail = "ankitb@gmail.com";
var accountPassword = "123456789";
accountCity = "Wardha";
let accountState;

console.log(accountState);


// accountId = 2; // Not Allowed 

accountEmail = "ab@.com";
accountPassword = "21213256";
accountCity = "Nagpur";
console.log(accountId);


/*
Prefer not to use var
bcs of issue in block scope and functional scope  
*/
console.table([accountEmail, accountId, accountPassword, accountCity]);

