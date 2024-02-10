import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//     name: '_blank'
//   },
//   children: 'Click me to visit google '
// }
//TODO ***Creating Object diffination as React consider after parsing using babel {Transpiler}which cha  ***


const standardReactElement = React.createElement('h1', {
   href: 'https://google.com',
    target: '_blank',
   
},'Click me to visit google')

ReactDOM.createRoot(document.getElementById('root')).render(
standardReactElement
)
