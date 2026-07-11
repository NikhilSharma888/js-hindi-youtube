const score = 500
console.log(score);

const balance = new Number (445.4014);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));
console.log(balance.valueOf(2));

const hundreads = 1000000
console.log(hundreads.toLocaleString()); // by default us language use.
console.log(hundreads.toLocaleString('en-In')); // this is indian language.

//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-938));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(4,3,2,5,9));
console.log(Math.max(4,3,2,5,9));

console.log(Math.random()); // answer range in between 0 to 1
console.log(Math.random()*10 + 1); // +1 for atleast the value is 1 ex:- 0.034*10=0.34.. thats why we add 1 since 1.34..
console.log(Math.floor(Math.random()*10 + 1)); // it gives only the least value not show in decimal.

const min = 13
const max = 24

console.log(Math.floor(Math.random() * (max - min + 1 )) + min); 
