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

// package-lock.json vs package.json -> firstly package-lock is checked first for installing packages and it has exact versions while package.json is used when the lock file is missing and package.json file doesnot have exact version but it can give value of the major version

// // Metlify for deployment

// // JSX (javascript XML) -> .jsx can have both html and js code together 
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