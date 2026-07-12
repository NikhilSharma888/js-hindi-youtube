// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());


console.log(
  myDate.toLocaleString("en-IN", {
    timeZone: "Asia/kolkata"
  })
);                                  // for set the time in indian Standard Time

let myCreatedDate = new Date(2026, 0, 30, 13, 56);
// let myCreatedDate = new Date("01-14-2026");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // get the ttime in mili seconds
console.log(myCreatedDate.getTime()); // get the ttime in mili seconds
console.log(Math.floor(Date.now()/1000)); // converted into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
 
console.log(newDate.toLocaleString('default', {
  dateStyle: "medium"
}))

