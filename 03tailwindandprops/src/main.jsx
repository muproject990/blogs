import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
let user={
  username:"Aavash",
  age: 18,
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App username="aavash" />
)
