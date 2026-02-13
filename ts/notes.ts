// tsc app.ts --target es2016 -> converts/compiles the ts code into js (version can be specified by target flag) code and makea a new file
// tsc --init -> creates a typescript config file
// tsc --watch -> converts the ts code to js as soon as you write
// semicolon is required in ts
// and html will be connected to the js file only and not the ts file

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

// interface admin {addhar?:number...} -> interfaces are prefered over type and the quesiton mark after a key represents that its optional
// let a : admin = {...}
// let a : Partial<admin> = {...} -> makes all the properties as optional
// let a : Required<admin> = {...} -> makes all the properties as required
// let a : Readonly<admin> = {...} -> makes all the properties as read only

// // Functions in ts
// function greet(a:number):number{} -> the return type of a function is optional
// function greet(callback: (name:string)=>string) -> defining callback function
// type greeting = (name:string)=>string -> type can be used to specify such custom types for callback and variables

// // Classes in ts
// class person{
//     name:string;
//     age:number;

//     constructor(name:string, age:number)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     greet():void{
//         console.log("something")
//     }
// };

// const obj = new person("aman", 21)
// interface teacher extends human{....} -> extends behave similarily as it does in java, and the behaviour of super is same as python, and multiple inheritance is present

// public -> properties of that class can be used outside the class
// private -> properties of that cant be used outside the class, not accessible even in child class
// protected -> properties of that cant be used outside the class, but accessible in child class

// // Generic function in ts
// function greet<T>(a:T):T{....} -> T will refer to the type of the argument which is passed as parameter
// interface admin<T,U>{.....}
// const obj:admin<string, number>