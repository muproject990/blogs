import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // cosnt [counter,sCounter]=useState(false)
  const [counter,setCounter]=useState(15)
  
const addvalue=()=>{
  console.log(counter);   
  //TODO ***Project Given By hitesh Sir  ***      
  // if (counter<20) {
    
  //   setCounter(counter+1)
  //   console.log("value added:",Math.random()*counter);


  //TODO *** Uses rect fiber concept  ***
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter((prevCounter or counter)=>prevCounter(or counter)+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  }            



  return (
    <>
     <h1>Chai aur Code</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addvalue}>Add Value {counter}</button>
     <br />
    </>
  )

  }
export default App
