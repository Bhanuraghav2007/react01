import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [length, setlength] = useState(8)
const[numberallow,setnumberallow]=useState(false);
const[charAllowed,setCharAllowed]=useState(false);
const[passowrd,setpasswrod]=usestate("");


//useref hook
const passwordRef=
const passwrodGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) str+="0123456789"
  if(charallowed) str+="!@#$%^&*{}[]~`-_+=<>"
  for (let i = 0; i <length; i++) {
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
  }
  Setpassword(pass)
},[length,numberallow,charAllowed,setpasswrod]) 

const copypasswordtoClip=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[passowrd])

useEffect(()=>{
  passwordGenrator()
},[length,numberallow,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>test

     <div className='className="flex shadow rounded-lg overflow-hiddden mb-4"'> 
      <input
      type="text"
      value={passwordRef}
      className='outline-none w-full ppy-1 px-3'
      placeholder="password"
      readOnly 
      ref={password}
      />
      <button
      onclick={copypasswordtoClip}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      <input type="range" 
         min={6}
         max={100}
         value={length}
         className='cursor-pointer' 
         onChange={(e) =>{setLength(e.target.value)}}
         />
         <lable>length:{length}</lable>
    </div>
     </div>
    {/* <h1 className='text-4xl text-center text-white'>password generator</h1>  */}
    </>
  )
}

export default App
