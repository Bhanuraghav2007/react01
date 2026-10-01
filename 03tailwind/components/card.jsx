import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// function Card(props) {
//  //props
// //  console.log("props",props);
// console.log(props.usrename)
function Card({username,btnText}) {
console.log(username);
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind classes</h1>
      <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">{username}</span>  
    <span>The Anti-Patterns</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default App
