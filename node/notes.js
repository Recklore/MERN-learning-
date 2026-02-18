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
// app.use("/about".(req, res)=>{res.send(....)}) -> in this the matching of end point happens character by character and from top to bottom of the code
// app.use("/abou?t".(req, res)=>{res.send(....)}) -> when there is a question mark in endpoint the the character before it is optional in the url (+ means character can be repeated, * , means anything can be put in between)
// app.use("/about/:id/:user".(req, res)=>{res.send(....)}) -> variables in url
// app.listen(4000, ()=>{......})
