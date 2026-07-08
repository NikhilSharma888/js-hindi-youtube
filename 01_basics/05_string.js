const name = "Nikhil";
const repoCount = 1

// console.log(name + " " + repoCount + " Value"); // this is old way of writing... 
// this is right but not preferable way of writing string in js.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is new way of writing string in js.
//  This is called string interpolation. It is a way to embed expressions inside string literals.

const gameName = new String ('nikhil-face-good');
//console.log(gameName[0]); 
//console.log(gameName.__proto__); // this is the prototype of the string object. It contains all the methods and properties of the string object.

//console.log(gameName.length);
//console.log(gameName.indexOf('f')); 
//console.log(gameName.slice(0, 6));
//console.log(gameName.replace('ilf', 'kiu'));
//console.log(gameName.toUpperCase());
//console.log(gameName.toLowerCase());   

// console.log(gameName.charAt(4)); 
// console.log(gameName.substring(1, 9));

const newStringOne = "     nikhil.com     ";
//console.log(newStringOne);
//console.log(newStringOne.trim()); // this will remove the white spaces from the start and end of the string.

const newStringTwo = "nikhil.com";
//console.log(newStringTwo.split('')); // this will split the string into an array of characters.
 
const newStringthree = "alphabeta is good"
//console.log(newStringthree.endsWith("good", 17));
 
const url = "https://nikhil@google.com/nikhil=78%sharma"
console.log(url);
console.log(url.replace('=78%', '_'));
console.log(gameName.split('-'));