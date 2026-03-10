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

// // MongoDB (npm install mongodb)
// we will get the replica services with free plan but we wont be getting the feature of sharding in that free plan
// mongodb connection string -> username : password @ cluster
// database -> collection(kind of table) -> document(row) -> field

// const { Mongoclient } = require('mongodb')
// const client = new MOngoClient("connection url")
//
// async function main()
// {
//     await client.connect()

//     const db = client.db("name")
//     const colleciton = db.colleciton("name")
//
//     these two fucntions to access the db and collection dont need await as it does not care/checks if the database or collection even exists, these things are checked when we try to access the data
//     return 'done.'
// }
//
// main()
// .then(console.log)
// .catch(console.error)
// .finally(()=>client.close())

// cosnt result = await collection.find({}).toArray() -> the network call is made by .toArray and not the .find (so the await is for .toArray) .find gives object that just act as cursor to read documents one by one or in case or .toArray data is fetched and kept in an single array
// for await (const doc of result)
//     console.log(doc)

// const insertResult = await collection.insertOne({.....}) -> use insertMany to insert multiple docs in the collection; insertMany([{....},{....}])

// // Mongoose (a layer of software on top of mongoDB) (it is object data modeling (ODM) library)
// npm install mongoose
// const mongoose = require('mongoose')
// await mongoose.connect("connection string")

// const {Schema} = mongoose
// const userSchema = new Schema({
//     name: String,
//     age: Number,
// })
//
// creating model/class -> creating collection (table)
// const user_model = mongoose.create("collection_name", userSchema)
//
// creating instance of the model/class
// const user1 = new user_model({name:"aman", age: 21})
// await user1.save()
//
// await user_model.create({name:"aman", age: 21})
// await user_model.insertMany([{name:"aman", age: 21}.......])
//
// "__v" is a field automatically attached by mongoose and it is used to keeps track of the version of the document
//
// querying the database
// const ans = await User.find({}) -> get all
// const ans = await User.find({name: "aman"}) -> filtered results where name is aman
// 
// connect to database first before starting the server (starting listening)
// if any extra field (not in schema) is sent in the post/put then mongoose just stores the fields that are in the schema and ignores the unwanted field completely
// 
// await user_model.deleteOne({name: "aman"})
// const res = await user_model.deleteOne({name: "aman"} // find, {age: 21} // update)


// // Data Sanitasation and Validation in MOngoose
// explore methods like findByIdAndUpdate(_id, update, {"runValidator":true}) -> third option is to check data for schema before updating, findById etc
// data validation using mongoose schema (min, max, unique, default, immutable, etc)
// enum: ["male", "female", "other"] -> if enum is defined then the field will not accept any value other than what is defined in the array

// validate(value){
//     // we can access the value of the field by the value variable and apply validation operations on it 
// } -> this is defined inside the schema
// {timestamps:true} -> time is set true in the schema to enable the fields of createdAt and updatedAt in stored documents
// 
// API level validation vs Schema level validation -> we do API level validation to minimise DB calls

// // Password storage
// Rainbow table (used to get hash of common passwords)
// 
// Salting -> adding strings/characters in the password
// 
// //  bcrypt library
// const bcrypt = require('bcrypt')
// const password = "something"
// const salt = bcrypt.genSalt(10)
// cosnt hashedPass = await brcypt.hash(password, 10 -> iterations or salt can also be passed instead of this as it has all info already)
// cosnt ans = await bcrypt.compare(password, hashpass)

// // API level validation
// cosnt validator = require('validator')
// validator.isEmail(data.emailId) -> validator library has more such functions to validate different user inputs

// // Session management
// session id
// digital signature using public key and private key

// // JWT (json web token) (jwt token is stateless) (jwt.io) token and cookies
// JWT => header.payload.digitalSignature
// Header -> type, algo name, etc
// Payload -> has info like usersname, email, etc
// DigitalSignature -> encrypt by sever key( hashcode( header + payload ))
// 
// the header and payload are not encrypted at all, while just the the Digital signature part it encrypted by server key
// 
// res.cookie("JWT_token", "actual token value")
// Cookie parser -> npm install cookie-parser
// const cookieParser = require(cookie-parser)
// app.use(cookieParser())
// 
// npm isntall jsonwebtoken
// const jwt = require(jsonwebtoken)
// const token = jwt.sign({"payload":"values"}, "server_key", {expiresIn:3600 -> time in seconds, or we can use "2 days", "10h", etc})
// cosnt payload = jwt.verify(req.cookie.token, "server_key") -> if the token is verified successfully then the payload is returned else an error is thrown

// // Refresh token -> it is used to refresh the jwt token after expiry, its gives an illusion of permanant jwt token to user
// refresh token becomes invalid once user changes his/her password, usually we store the refresh token and its attributes in the database

// // Schema methods -> used and mentioned in the user.js file

// // Environment variables -> used em in python (the same .env file)
// npm install dotenv
// require('dotenv'),config()
// 
// process.env.key -> this is the variable we use to access variables mentioned in the .env file, where key is the name of the variable
// process.env is a global

// // Express Router
// create using express.Router()
// rest of the info the routes.js file
// then we import the route into the main file and then pass it in place of the callback

// // Logout -> res.cookie("token", null, {expires: new Date(Date.now())}) -< it deletes the cookies
// the above method wont work if the user already copied the previous token, as that token is still for sometime so we need to create an in-memory db to store the logout tokens till there expiry


// // Redis database -> in-memory database (npm install redis)
// const redis = require('redis)
// const redisClient = redis.createClient("all the details about the connection that we can get on the redis dashboard or something" "username, pass, socket etc...")
// await redisClient.connect() -> write this in an async function to connect to redis database
// await redisClient.set(`token:${token}`, "blocked") -> creates a key value pair in redis
// await redisClient.expire(`token:${token}`, 1800)
// await redisClient.expireAt(`token:${token}`, payload.expAt) -> set the expiry of the key
// const isBlocked = await redisClient.exists(`token:${token}) -> checks if the key exists

// // Rate Limiter
// token bucket algo -> we can use a token bucket and give response to requests who have the token else if the token bucket is empty no further request is served untill unless any token is freed after serving the previous request
// blocking based on ip address -> req.ip
// limiting time between requests (by storing the time of last request)
// fixed window approach vs sliding window approach
// 
// app.use(rateLimiter) -> use ratelimiter as an middleware
// const rateLimiter = async(req,res,next) => {
//     try {
//         const ip = req.ip
// 
//         const count  = redisClient.incr(ip)
// 
//         if (count>60) {
//             throw new Error("user's request limit exceeded")
//         } else if(count == 1) {
//             await redisClient.expire(3600)
//         }
// 
//         next()
// 
//     } catch (error) {
// 
//     }
// } 