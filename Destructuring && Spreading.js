//Spreading

const obj ={
    name:'Bahri',
    age:32,
    addresse:'Testour'
}
//meth1 es5
obj.gender = 'Male'
//es6
let obj2 = {...obj,gender:'Male'} 

let obj1 ={
    name:'Bahri',
    age:32,
    addresse:'Testour'
}
let obj2 ={
    sentence:'Chaker',
    agess:25,
    addrekkkkksse:'Ben Guerden'
}

let obj = {...obj1,...obj2}

console.log(obj)// works like concat

const arr1 =[1,2,3];
const arr2 = [4,5,6]
//
let arr = arr1.push(arr2)
//Es6
const Arr = [...arr1,...arr2]

// Destructuring

let obj1 ={
    name:'Bahri',
    age:32,
    addresse:'Testour'
}

//console.log(`my name is ${obj1.name} and i am ${obj1.age} and I live in ${obj1.addresse}`)

let {name,age,addresse} = obj1
console.log(`My name is ${name} and I am ${age} and I live in ${addresse}`)


let introduction = ["Hello", "I" , "am", "ady"];
//introduction[0] //Hello
let [intro1 , intro2, ...rest] = introduction
console.log(intro1,intro2,rest)
// output
//intro 1 ==> Hello
//intro2 ==> I
//rest ==> ["am", "ady"]



