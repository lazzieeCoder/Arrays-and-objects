// Object declare using {} and print using dot notation
var person ={
    name: "Rajini",
    age: 45,
    occupation: "actor"
}
console.log(person.name);
console.log(person.age);
console.log(person.occupation);
// Object declare using {} and print using square []
var person ={
    name: "Rajini",
    age: 45,
    occupation: "actor"
}
console.log(person["name"]);
console.log(person["age"]);
console.log(person["occupation"]);
console.log(person)
// Object declare using new method
var person = new Object();
person.name = "rajini";
person.age = 45;
person.occupation = "actor";
console.log(person);
//Modifying the Object using dot
var person = {
    name: "rajini",
    age: 45
}
console.log(person)
person.name= "kamal"
console.log(person);
//Modifying the Object using square[]
var person = {
    name: "rajini",
    age: 45
}
console.log(person);
person["age"]=60;
console.log(person);
//Adding a new property
var person = {
    name:"kamal",
    age:60
}
console.log(person)
 person.occupation= "actor"
 console.log(person);
//Removing Obj property
 var person = {
    name:"kamal",
    age:60,
    city: "chennai"
}
console.log(person);
delete person.city
console.log(person);
//JSON.parse()
var a = '{"name":"kamal","age":60}';
console.log(a);
var b = JSON.parse(a);
console.log(b);
//JSON.stringify
const c = {
    name: "kamal",
    age: 60
}
console.log(c)
var d = JSON.stringify(c);
console.log(typeof(d))
//Nested JSON object
var person = {
    "name":"kamal",
    "age" :60,
    "occupation":"actor",
    "address": {
        "city" : "chennai",
        "pincode" : 60001
    }
}
console.log(person)
//Array Destructuring
const arr = [1,2,3];
const[x,z,wwww,d=4]= arr;
console.log(x);
console.log(z);
console.log(wwww);
console.log(d);
console.log(arr);
//Object Destructuring
const obj = {
    name: "kamal",
    age:60,
    address:{
        city: "chennai",
        pin: 60001
    }
 }
//const{key}=objectname
const {name,age}= obj;
console.log(name);
console.log(age);
//Use Strict in Js
//without strict mode
fullname = "kamal"
console.log(fullname)
//with strict mode
'use strict';
fullname = "kamal"
console.log(fullname)
//1. Using "this" keyword alone, refers to global object
console.log(this);
//2.In regular function , refers to global object
const a = function(){
    console.log("hello world");
    console.log(this)
}
a();
//3. In a function in strict mode , "this" is undefined.
'use strict';
const a = function(){
    console.log("strict mode");
    console.log(this)
}
a();
//4. In a method, "this" refers to the owner object.
const person = {
    names : "kamal",
    age: 60,
    occupation: "actor",
    detail: function(){
        console.log(`I love ❤ ${this.names}`)
    }
}
console.log(person.detail());





