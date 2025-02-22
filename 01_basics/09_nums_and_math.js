const score = 12.192
// console.log(score) //1233144

const balance = new Number(999)
// console.log(balance) //[Number: 999]

// console.log(balance.toString()) //conversion to string

//to fixed
// console.log(balance.toFixed(2))

//to precision
// console.log(score.toPrecision(3))

//comma separated value 
const hundreds = 1000000
// console.log(hundreds.toLocaleString())//acc to us standards
// console.log(hundreds.toLocaleString('en-IN'))//acc to indian



// **************** MATHS **************************************************************
/*
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(-4.314)) //round of
console.log(Math.log10(4))
console.log(Math.ceil(4.131)) //ceiling
console.log(Math.floor(4.1241)) //floor
console.log(Math.sqrt(241))
console.log(Math.max(3,14,4,1,4,1,4,14))
*/
console.log(Math.random()) //always value between 0 and 1
//custom random
const max = 10 
const min = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//values between 10 and 20 only