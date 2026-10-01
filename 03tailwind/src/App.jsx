import { useState } from 'react'
import './App.css'
import card from './components/card'
function App() {
let myobj={
  username:"bhanu",
  age:12
}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind classes</h1>
     {/* <card channel="chai aur code" someobj={myobj} /> */}
     <card username="chai aur code" btnText="clickme" />
    </>
  )
}

export default App
