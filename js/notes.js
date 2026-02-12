// console.log("Hello World");


// // value can be changed
// let a = 10
// // value can not be change
// const b = 20
// // value can be changed variable is hoisted and can be accessed before declaring too (undefined)
// var c = 30


// // datatypes console.log(typeof variable_name)
// primitive - number, string, boolean, bigint, null (it is an object), undefined, symbol
// non primitive - array, object, function


// // type converison Number('50')
// Number(NUll) = 0
// Number(undefined) = NaN\
// Boolean("") = false
// Boolean("anything") = true

// (10 == "10") is true, type conversion happens for comparison
// (10 === "10") is false
// null == undefined is true
// null === undefined is false
// null == 0 is false
// null > 0 is false
// null < 0 is false
// null <= 0 is true
// null >= 0 is true
// undefined == 0 is false
// undefined > 0 is false
// undefined < 0 is false
// undefined <= 0 is false
// undefined >= 0 is false
// NaN == Nan is false

//  &&, ||, !

// // bitwise operator - &, |, ^, ~, <<, >>

// // primitive dataypes are immutable and non primitive datatypes are mutable

// // strings in js
// let str = `this is like the f-string in python using ${varable}`

// let x = new string("wtf") -> it will be an object

// // Math in js
// console.log(Math.E)
// console.log(Math.LN10) -> log base e (10)
// console.log(Math.PI)
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.random()) -> 0<= val <1

// // Array in js
// const arr = [1,2,3,4]
// const new_arr = structuredClone(arr) -> makes a clone of arr instead of just pointing to the same array

// // Date in js
// const d = new Date(//time in milliseconds to get data or just leave it default)
// d.toDateString()
// d.toString()
// d.getDate()
// d.getDay()
// d.getMonth()
// d.setDate()
// data1 - data2 -> returns the difference in milliseconds

// // Object in js
// cosnt person = new Object()
// person.age = 43
// keys = Object.keys(person) -> return keys in an array, same for values and entries
// let obj3 = Object.assign({} //target, obj1, obj2) -> creates a copy but doesnt work well for nested objects
// delete person.age
// // oop method
// class People
// {
//     constructor()
//     {
//         this.name = "aman"
//     }
// }
// const person1 = new People()
// // spread operator
// const obj = {...obj1, ...obj2, ...obj3}

// Destructuring an object
// const {key1: newkey1, key2, ...rest_obj_values} = obj
// const [first,,third] = arr -> destructuring array
// cosnt {address:{pincode}} = obj -> nested destructuring

// Prototype
// const arr = {1,2,3,4,5}
// arr.__proto__
// const obj2 = Object.create(obj)
// obj1.__proto__ = obj2 -> changing prototype or just inherting
// obj.__proto__.__proto__ -> arr -> Array.prototype -> Object.prototype
// obj.__proto__.__proto__.__proto__ = null

// // Functions in js
// fucntion greet(){....}
// const fun = function(){....}
// const fun = function(...num){....} -> rest operator "..." stores all values as an array
// const fun = ()=>{....}
// const fun = (num1, num2)=> num1+num2
// const fun = num => num+num
// fucntion greet({name, age}){....}

// // Properties of key:value pairs of an object
// writable -> changeable or not
// enumerable -> can be used in for each/in loop or not
// configurable -> can change the boolean value of writable and enumerable or not
// let obj = {}
// Object.defineProperty(obj, "key", {
//     value: "values",
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// for of loop
// for in loop
// for each loop

// // Callback functions in js -> function as an argument in another function
// setInterval(function_name, time_in_ms)
// arr.forEach((value, index, ar)=>{....})
// arr.filter((num) => {return num%2 == 0})
// arr.reduce((acc, curr, index, ar)=> {..}, intaialisation})

// // Set in js
// const set1 = new Set([arr])
// set1.add(), set1.delete()
// set1.has(values) -> boolean

// // Map in js -> keys and values can both be of ANY datatype
// const m = new Map([["mohan", 89], [89,"rohan"]])
// m.set(key, value)
// m.delete(key)


// // Temporal Deadzone -> variables declared by let and const are in temporal deadzone from the time there hositing to their initialisation, a variable can not be accessed while in temporal deadzone and if accessed it will throw error

// // Hoisting -> the variable and function declaration are moved to the top of the containing scope before actual compilation

// // Global Object has different names in different environments, but we can use "globalThis" to refer to global object in any environment

// // "this" keyword -> it points to global context when outside every block, it points to an module's export object in node, and points to "window" in browser, arrow function dont have its this keyword it inherits this from surrounding lexical

// // Strict and Non Script modes in js -> activate strict mode with "use strict"


// // DOM (Dcoument object model) in js
// window -> document -> HTML
// document.getElementById("id_of_element").innerHTML = "something"
// document.querySelcetor("#id") -> returns first matched element instead of an HTML colleciton in case of multiple matches
// document.querySelcetorAll("#id")
// element.parentNode
// element.parentElement
// element.chileNodes -> NodeList, next line is also returned in the Nodelist as an child element
// element.children -> HTML collection
// element.firstChild
// element.firstElementChild
// element.lastChild

// // Creating an new element
// const element = document.createElement("li")
// element.innerHTML = "something" 
// const parent = documnet.getElementById("root")
// parent.appendChild(element)
// parent.append(element)
// const element = document.createTextNode("something")
// const attribute = document.createAttribute("li")
// element.setAttributeNode(element)
// element.setAttribute("attribute_name", "value")
// element.getAttribute("id")
// parent.insertBefore(element, reference)
// element.insertAdjacentElement("afterend", element2) -> beforebegin, afterbegin, beforeend, afterend

// Array.from(obj) -> converts object into array


// // Events in js
// const button = document.getElementById("button")
// button.addEventListener("click", (event) => {// some callback function}) -> dblclick, mousemove, mouseover, keyup, keydown

// Event object -> it has all the info about the event, (it is the argument in the callback function)
// event.key -> its is the name of key which is pressed
// event.type -> eg: click, dblclick etc
// event.target -> returns which html element in targeted in the event
// event.clientX -> x of click location in px
// event.clientY -> y of click location in px

// // Event Bubbling -> when the child, parent and grandparent all have event listeners and if click the child then all the events will be triggered in order of child-parent-grandparent (default behaviour of event listener) (event.target would be child only for all, but event.currentTarget would be different) (and we can know that which child has triggererd the event by this)
// // Event capturing -> same as event bubbling but the order of triggering is reverse
// element.addEventListener("click", () => {......}, true // it will cause event capture)
// Event Delegation -> instead of adding event listener to each child you add a single event listener to the parent only
// event.stopPropogation() -> stops event bubbling and capture both 

// // Forms in js
// event listeners can be added to form -> click, input, change, focus (but focus dont follow bubbling so apply it on individaul inout field), focusin, blur/focusout, submit, reset(make the button type to reset too)
// cosnt data = new formData(form) -> data is the form data object now

// arr.sort((a, b) => {........})

// // Callback Hell in js -> caused when we need synchronous execution
// // Web API in browser

// // Promises in js -> fetch("url").then((response)=>{something}) // response argument has the data returned from fetch
// states -> pending, resolved, rejected
// fetch("url").then((data)=>{something}).catch((error)=>{})
// response.json() -> it is a promise too

// const prom = new Promise((resolve, reject)=>{resolve(something) or reject(something else)})

// // Async - Await in js
// async function fun(){
// cosnt pr = await some_fun(data)}
// async function always returns an promise
// const arr =  Promise.all([//array of promises])

