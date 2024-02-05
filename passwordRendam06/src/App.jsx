

import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState ("")

  const passwordGen = useCallback(()=>{
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
   for (let i = 0; i < length; i++) {
    let chat = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(chat)
   }
   setPassword(pass)
  },[length,setPassword])

 useEffect (()=>{
  passwordGen()
 },[length])
  const copyText = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  return  (
  <>
  <div>
   <input type="text" 
   value={password} 
   className="outline-none w-full py-1 px-3" 
   placeholder="Password" readOnly />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyText} >copy</button>
   <div>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
       <label>Length: {length}</label>
   </div>
  </div>
  </>
 )
}

export default App
