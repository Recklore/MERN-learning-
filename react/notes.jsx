// // REACT -> it is an js library/framework used mainly to build single page webapps
// CDN links:
// <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> -> react
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -> react DOM
// 
// why are these two different packages? -> because in mobile apps react-native is used and only react package is used there and react-DOM is not requried there.

// const element = React.createElement("h1", {}, "children")
// const reactRoot = ReactDOM.createRoot(document.getElementById("root")) -> creates a react container for root element (access of rendering comes to this react container)
// reactRoot.render(element) -> it will remove all the previous all the children in the root and then renders the new ones

// static data is stored in CDNs and the dynamic data is stored in the actual servers of the organisation

// Bundler -> bundles all the code and dependencies and also optimizes the code ( removes comments and unused code etc ) (eg: vite, parcel, webpack etc)
// npm install react
// npm install react-dom
// import React form 'react'
// import ReactDOM from 'react-dom/client'
// import statements are used in modulejs and not in common js

// npx parcel index.html
// npx parcel build index.html -> create a folder named "dist" which has the optimized code files that are for production, (it also creates a mapping files that can be used to redo this optimzation and get original js files form the optimized fiels)

// package-lock.json vs package.json -> firstly package-lock is checked first for installing packages and it has exact versions while package.json is used when the lock file is missing and package.json file does not have exact version but it can give value of the major version

// // Netlify for deployment

// // JSX (javascript XML) -> .jsx can have both html and js code together (jsx is not a part of react, babel converts this jsx code in to react code)
// const name = "some js variable"
// const newElement = (
//     <div>
//         <h1 className = "some_class">hello world {names}</h1>
//         <h2>hello world again</h2>
//     </div>
// ) -> this new element can only be one single element so we wrapped the h1 and h2 inside a div, but we can also use <> empty tags </> if we dont want any extra stuff like a div

// // React Components (class based component and fucntion based component, class based were used in older versions)
// fucntion based:
// const component = () => {return <>some html</>}

// User defined tags in jsx should have the first letter as capital (eg: <Greet/>)
// Greet is a js funciton that returns some html, now if need to pass some arguments in this funciton the we can do it using simple html format: <Greet/ key="valuse"> and can be accessed using props: funciton Greet(props) {console.log(props.key)}

// Hooks in React
// usestate hook: returns an array, with first value the value passed in the fucntion call and the second is a function that would be used to set the value of the variable in the dom whenever it is updated
// import {useState} from "react"
// let [count, setCount] = useState(0)
// count += 1
// setCount(count)

// Useeffect hook: it take in an callback function and an dependency, and whenever the dependency is changed the callback fucntion is called at the end of the main function rendering
// import {useEffect} from "react"
// useEffect(()=>{
//     document.body.style.backgroundColor = color;
// }, [color])

// export default React.memo("jsx-function") -> this hook will prevent the rerendering of the export in other file due to changes in the parent elemnt in that file, allow changes only when the props are changed eg: <jsx-fucntion name = {count}></jsx-fucntion>