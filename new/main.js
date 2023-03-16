//Data types - String, Numbers, Boolean, null, undefined
//console.log('Hello Mishael')
//let, const, var
//data types: string, numbers, boolean, null, undefined, symbols
const name = 'Mishael'
const age = 30
// const rating = 4.5
// const isCool = true
 // const x = null
// const y = undefined
// let z;

//concatenation
//console.log('My name is name and I am age')
//Template String
//console.log('My name is ' + name + ' and I am ' + age)
//const hello = `My name is ${name} and I am ${age}`
//console.log(hello)

// const u = 'technology, computer, it, hardware'
//note - a property does not have parenthesis, just a method
//const s = 'Hello World'
//console.log(s.substring(0, 5).toUpperCase())
// console.log(u.split(', '))
//Arrays - variables that hold multiple values

/*const numbers = new Array(1,2,3,4,5) - old method
console.log(numbers)*/ 

// const fruits = ['apples', 'oranges', 'pears']
// fruits[3] = 'grapes'
// const length = fruits.length
// fruits[length-1] = 'cherries'
// fruits[length] = 'strawberries'


// fruits.unshift('breadfruit')
// fruits.push('cherries')
// fruits.pop()

//console.log(Array.isArray('fruits'))
//console.log(fruits)

//object literals -
// const person ={
//     firstName: 'Henry',
//     lastName: 'Mishael',
//     age: 25,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '36, Abosede Kuboye crescent',
//         city: 'Surulere',
//         state: 'Lagos'
//     }
// }
// console.log(person)

// student = {}
// student.age = 33
// student.name = 'henry'
// student ['town'] = 'Lagos'
// student['state'] = 'Delta'
// console.log(student)
// student.bio = function(){
//     alert(`hello, my name is ${this.name} and I am from ${this.town}`)
// }

//  teacher = {
//     name: 'Franc',
//     greet(){
//         alert('hello' + ' ' + this.name)
//     }

//  }

     

 function createPerson(firstName, lastName, age, address){
        const obj = {};
       obj.firstName = firstName;
       obj.lastName = lastName;
       obj.age = age;
       obj.adress = address;
       obj.introduceSelf = function() {
        console.log(`Hi! I'm ${this.firstName} ${this.lastName} I'm ${this.age} and I live at ${this.adress}.`);
       };
       return obj;
 }

 let me = createPerson('Henry', 'Mishael', '25', '36, Abosede Kuboye Crescent')

 function Person(firstName, lastName, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.introduceSelf = function (){
        console.log(`Hi! I'm ${this.firstName} ${this.lastName} I'm ${this.age} and I live at ${this.address}.`)
    }
 }
 

 let you = new Person('Daniel', 'Henry', '28', '36,Abosede Kuboye Crescent')

//  let you = createPerson('Daniel', 'Henry', '28', '36,Abosede Kuboye Crescent')

//console.log(person.firstName, person.lastName)
//console.log(person.hobbies.indexOf('movies'))
//console.log(person.address.city) 

//destructuring
// const { firstName, lastName, address: {state}} = person

//person.email = 'henrymishael.hm@gmail.com'
//console.log(person)

const todolist = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Go to Class',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Read for two hours after class',
        isCompleted: false
    }
]

//console.log(todolist[2].text)

// const tlJSON = JSON.stringify(todolist)
// console.log(tlJSON)

//for
// for(let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`)
// }
//while
// let i = 0
// while(i < 10){
//     console.log(`while Loop Number: ${i}`); i++
// }
 function convertToRoman(num){
    let u = ['', 'i','ii','iii','iv','v', 'vi', 'vii','viii','ix']
    let t = ['','x','xx','xxx','xl', 'l', 'lx','lxx', 'lxxx','xc']
    let h = ['', 'c','cc','ccc','cd','d','dc','dcc','dccc','cm']
    let th = ['', 'm','mm','mmm','mv']
 }

 let myString = 'Hello World'
 let myRegex = /Hello/;
 myRegex.text(myString)
 myString.match(myRegex)

 let arr = []

 for (let x = 1; x <= 10; x++){
    arr.push(x)
 }
