import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter,setCounter]=useState(15)//pure webpage mai jaha bhi counter hoga haar jagha upgrade ho jayega

// let counter=5
const addValue=()=>{
  Setcounter(counter+1) //counter ko update karwane ka function
  console.log("value added",counter);}
  // counter=counter+1;
const removevalue=()=>{
 Setcounter(counter-1)
}
//ui mai change control srif react kr sakta hai 
// using hooks you can change
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button 
     onClick={addValue}
      > add value{counter}</button>
     <br />
     <button onClick={removevalue}>remove value{Counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
