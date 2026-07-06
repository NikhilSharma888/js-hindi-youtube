// Primitive data types in JavaScript

// 7 primitive data types in JavaScript are:
// String, number, BigInt, Boolean, undefined, null, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference Type(Non-primitive) data types in JavaScript

// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "spiderman"]
let myObj = {
    name: "Nikhil",
    age: 22, 
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "NIkhilsharmadotcom"

let anotherName = myYoutubeName
anotherName = "p4k_Nikhil"
console.log(anotherName); // p4k_Nikhil // ye stack (Primitive) hai is another wale me baad me change karne se
//  original walw se copy nhi karte hai isme change wala input aa jata hai.
console.log(myYoutubeName); // NIkhilsharmadotcom // ye 
let useOne = {
    email: "nikhil@google.com",
    upi: "nikhil@ybl"
}
let useTwo = useOne
useTwo.email = "p4k_nikhil@google.com"
console.log(useOne.email); // p4k_nikhil@google.com // isme copy nahi karta hai 1st wale ak object ke reference ko...
//  point karta hai 2nd wale object ke reference ko point karta hai
console.log(useTwo.email); // p4k_nikhil@google.com

