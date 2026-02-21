// // Imports in node
// require(file path) -> this import all the code is imported as IIFE
// module.exports = {something} -> module.exports is an empty object by default

// // Newer method of imports/ generally used more in React.js (node wont understand import/export by default, we need to change the extension of the files from .js to .mjs or just change the type in package.json (npm init) to module inseasd of common)
// export default something
// import something from "./file.js"

// // CJS vs MJS
// cjs is older and mjs is newer
// cjs: require, module.export ; mjs: import, export
// cjs is synchronous whereas mjs is asynchronous in terms of module import and exports 
// cjs runs in non strict mode by default, amn mjs in strict mode by default

// if we use require() and give it a folder path instead of a file path then i would check the module.exports of index.js file in that folder

// node.js is aysnchronous

// // libuv in node
// 'c' code that is use as an interface between node.js code and sever system allowing async behaviour (as we dont browser here as we had in the frontend)
// libuv is cross platform

// // File handling in node
// cosnt fs = require('fs')
// fs.readFile(",/path", "utf-8",(err, res)=>(....))

// // Server in node
// const http = require("http")
// const server = http.createServer((req, res)=>{ res.end("hello world")})
// server.listen(4000, ()=>{....})
// req.url -> gives the url endpoint on which req is made

// // MOnolith vs Microservice
// scaling
// codebase (single vs distributed)
// tech stack
// development
// server failure
// cost

// fetch api can be used to use the CRUS methods
// patch vs put: patch for partial updates (single or few changes) and put is used for complete updates in data

// // Express in node
// cosnt express = require('express)
// const app = express()
// app.use("/about".(req, res)=>{res.send(....)}) -> in this the matching of end point happens word (endpoint prefix) by word and from top to bottom of the code
// app.use("/abou?t".(req, res)=>{res.send(....)}) -> when there is a question mark in endpoint the the character before it is optional in the url (+ means character can be repeated, * , means anything can be put in between)
// app.use("/about/:id/:user".(req, res)=>{res.send(....)}) -> variables in url
// app.listen(4000, ()=>{......})
// app.get() -> these matches the whole endpoint instead of the first word only as in app.use()
// app.post()

// // js object vs json
// json is of string (text only) format whereas the js object is an object with its own prototype
// js function, undefined, null etc cant be the part of json
// the parser is used to convert the json data into js object -> app.use(express.json())

// // Postman -> used to test the backend and its responses to various types of requests

// // Middleware in node
// app.use('/home', (req,res,next)=>{}, (req,res)=>{}) -> the next aregument in the arrow callback has the refernce to the next callback function we passed as and argument in the app.use()
// if we call next and we dont have any next callback function then we get and 404 error
// app.use('/home', route-handler, route-hander) -> there can be n number of route handlers and they be kept in array or even alone separated by comma, also we can write these in separate app.use() with same route
// now all these callbacks that are in between are called middleware and the last one is called request handler etc

// Authentication -> verifying if you are who are you claiming to be
// Authorisation -> what are all the features i am allowed/authorised to use

// status code -> res.status(200).send("data")

// // Try-Catch block
// try{
//     something
// }
// catch(err)
// {
//     something else
// }
// 
// throw new Error("Broken") -> throwing custom errors

// // DATABASES
// CAP theorem (brewer's theorem) -> whenever we have a distributed databases and systems it can only guarantee only two out of the three following properties: Consistency, Availability, Partition Tolerance (internal communication between the distributed systems is down then what to do, consistency vs availability)

// // B+ tree -> already studied