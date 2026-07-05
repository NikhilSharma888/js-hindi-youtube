let score = "nikhil"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "44" => 44
// "44abc" => NaN (not a number)
// true => 1; false => 0;

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false; 
// "nikhil" => true

let someNumber = "33"
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof someNumber);

// ************************************* Operations ********************************

let value = 3 
let NegValue = -value
console.log(NegValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 to the power 2
console.log(2%3); // remainder
console.log(2/3); // division

let str1 = "Hello"
let str2 = " Nikhil"
let str3 = str1 + str2
console.log(str3); 

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log( 1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3); // 2

console.log(+true); // 1
console.log(+""); // 0

let gameCounter1 = 100
let gameCounter2 = 100
++gameCounter2;
--gameCounter1;
console.log(gameCounter1);
console.log(gameCounter2);
