//console.log(45454>123234)

//diff data types
//console.log("23a" > 1) //cannot compare 2 other data types

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // non predictable results
console.log(undefined == 0) //undefined comparisons are always false

/*
reason is that an equality check == and comparisons work differently
comaprisons(>,<) convert null to a number , traeting it as 0
that's y (1) is false and (3) is true
 */

//strict check === {also checks the data type}

console.log("2" === 2) //here op is false coz string != number


//always avoid these comparisons , always clean code