import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {

let myObj = {
  username:"hitesh"
  ,age:21
}



return (
  <>
  {/* //TODO ***Passing props into Username  *** */}
  {/* <Username  username={myObj.username}/> */}
  <Card/>
  </>
  )
}

export default App
