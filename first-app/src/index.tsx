import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'


// const page = (
//     <div>
//         <h1 className={"header"}>This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page);


//challenge
/*
* Create a navbar in JSX:
*  - Use the semantic `nav` element as the parent wrapper
*  - Have an h1 element with the brand name of you website
*  - Insert an unordered list for the other nav elements
*   - Inside the `ul`, have three `li`s for "Pricing",
*   "About", and "Contact"
*  - dont worry about styling yet.
* */

//challenge code
// const page = (
//     <div>
//         <h1>why we like react</h1>
//         <ol>
//             <li>its composable</li>
//             <li>it's declarative</li>
//             <li>it's hireable </li>
//             <li>it's actively maintained</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById('app-root')
// )




let navbar = (
    <nav>
        <h1 className={'brand'}>Brand</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById('app-root')
)

