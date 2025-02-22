// date starts from jan 1 , 1970 UTC 

/*
let my_date = new Date()
console.log(my_date)
//2025-02-22T07:02:40.489Z

console.log(my_date.toString())
// Sat Feb 22 2025 07:02:40 GMT+0000 (Coordinated Universal Time)

console.log(my_date.toDateString())
// Sat Feb 22 2025

console.log(my_date.toLocaleDateString())
// 2/22/2025

console.log(my_date.toLocaleString())
//2/22/2025, 7:04:08 AM
*/


let my_created_date = new Date(2023 , 0 ,23)
console.log(my_created_date)

let my_new_date = new Date("08-27-2005")
console.log(my_new_date.toDateString())

//timestamp
let my_timestamp = Date.now()
//Date.now() returns the current timestamp in milliseconds since Jan 1, 1970 (UTC).
console.log(my_timestamp)
console.log(my_created_date.getTime())
// .getTime() converts a date to its equivalent timestamp (milliseconds since 1970).



//more methods
let NEW_DATE = new Date()
console.log(NEW_DATE.getFullYear())

