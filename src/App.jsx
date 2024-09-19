import { useState } from 'react'
import './App.css'
import { useEffect, useCallback } from 'react'

function App() {

  let [length, setlength] = useState(8)
  let [charAllowed , setcharAllowed] = useState(false)
  let [numAllowed , setnumAllowed ] = useState(false)
  let [pass , setpass ] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setpass(pass)


  }, [length, numAllowed, charAllowed, setpass])

  useEffect(()=> {
    passwordGenerator()
  },[length , numAllowed, charAllowed ])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h3 className='text-white text-center my-3'>Password generator</h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={pass} className="outline-none w-full py-1 px-3" placeholder="Genrated Password" readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} /> <label> Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={numAllowed}  onChange={()=>{setnumAllowed((prev) != prev);}} /><label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="characterInput" defaultChecked={charAllowed}  onChange={()=>{setcharAllowed((prev) != prev);}}/> <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
