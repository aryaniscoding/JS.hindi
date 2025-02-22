// Primitive datatypes : 
    // string
    // Number 
    // Boolean
    // null
    // undefined
    // Symbol = to make values unique
    // BigInt

// Non Primitive (Reference)
    // Array
    // Objects
    // Functions
    
/*
JavaScript is dynamically typed, meaning that 
variable types are determined at runtime, 
and you don’t need to
specify a type when declaring a variable.

let x = 10;       // x is a number
x = "Hello";      // Now x is a string
x = true;         // Now x is a boolean

 */

//SYMBOL
const id = Symbol('123')
const another_Id = Symbol('123')

console.log(id === another_Id)

//BigInt
const begint = 1231412441241241414244n
console.log(typeof begint)



// arrays , objects and functions 
// non primitive data types is OBJECT only

const name_ = ["aryan","harsh","rahul"] //arrays (typeof array is object)

let my_obj = {
    //object
    //key : value
    name : "aryan",
    age : 12,
    weight : 12.132
}

//function
const my_Function = function(){
    console.log("hello aryan , we all love you")
}

console.log(typeof name_)