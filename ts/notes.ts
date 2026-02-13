// tsc app.ts --target es2016 -> converts/compiles the ts code into js (version can be specified by target flag) code and makea a new file
// tsc --init -> creates a typescript config file
// tsc --watch -> converts the ts code to js as soon as you write
// semicolon is required in ts

// let a:number = 10; -> string, boolean, null etc can also be used, and even if we define tpy explicitly it will still take the type of the variable it is initailised with. (if you dont initialise at declaration the default type is any)
// a ="aman" -> this will give error as a is of number type, but it will still create and js file 


// // Type inference in ts
// let a:any
// let a:unknown -> safer then any, as we can only perform any operations on the variable only if we check its type first
// let arr:(string | number) = ["aman",50, 90]

// // Objects in ts
// let obj:{age:number,....schema, (kind of like pydantic models)} = {}

// type customer = {age:number,.....}
// let c : customer = {}

// interface admin {...} -> interfaces are prefered over type
// let a : admin = {...}