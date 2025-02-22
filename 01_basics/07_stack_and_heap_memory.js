// Stack , HEAP memory
// Stack(Primitive)value , Heap(Non - primitive)reference

let my_name = "aryan"
let another_name = my_name

another_name = "ravi"
console.log(another_name) //ravi
console.log(my_name) //aryan

// non primitive
let user_one = {
    upi : "123",
    acc : "abc@gmail.com"
}
let user_two = user_one //direct reference
user_two.upi = 123322
console.log(user_one.upi)
console.log(user_two.upi)

//here original value is also changed