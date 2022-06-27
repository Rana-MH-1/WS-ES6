var x = 3;
if(true){
   // console.log(x)
    
}

console.log(x) //scope global or either local


if(true){
    let x = 3;
   // console.log(x) // let is defined in the block if (local scope)
    
}

console.log(x) ////ReferenceError: x is not defined

const x = 3;
if(true){
    
   // console.log(x) // let is defined in the block if (local lscope)
    
}
x = 5;
console.log(x) //TypeError: Assignment to constant variable.

//hoisting ==> greeter variable is moves on the top ans reinitialized with value undefined
console.log(greeter)
var greeter = 'hello'

//ReferenceError: greeter is not defined
console.log(greeter)
let greeter = 'hello'



const obj={
    name:'Syrine',
    age:25
}

obj={
    sentence: 'Hello',
    times:4
}

console.log(obj) //TypeError: Assignment to constant variable.

obj.gender = 'Female'
obj.age= 26

console.log(obj) // we cannot mutate obj but we can change the properties inside the obj like adding a new key or modifying a value of a key

const tab=[1,2,8,7]
tab[1] = 5

console.log(tab) // same for the array //output [ 1, 5, 8, 7 ]






