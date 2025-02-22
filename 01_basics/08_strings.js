//normal method to string concat
let name = "abcd"
let repo_count = 12
console.log(name + repo_count + "value")

// backticks
console.log(`hello my name is ${name} and my repo count is ${repo_count}`)

const game_name = new String('aryan ka game')
console.log(game_name[2])
// console.log(game_name.__proto__.game_name)

//accessing methods
console.log(game_name.toUpperCase())
console.log(game_name.charAt(4))
console.log(game_name.indexOf('g'))

//slicing
const new_string = game_name.substring(0,4)
console.log(new_string)

const new_string2 = game_name.slice(-1,)
console.log(new_string2)

//starting and ending spaces
const string1 = "   abcd    "
console.log(string1.trim()) //trims the starting and ending spaces

//replace
const url = "https://aryan.com/aryan website"
console.log(url.replace(" ","_"))

//includes
console.log(url.includes('aryan'))

//split string into array
console.log(game_name.split(" "))