import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setinput] = useState("")

  function display(value){
    setinput(input + value);
  
  }
  function clear(){
    setinput("");
  }
  function calculator(){
    let answers = eval(input);
    setinput(answers);
    
  }
  return (
    <>
   <div className=' bg-gray-500 flex justify-center items-center min-h-screen'>
    <form action=" " className=' h-[490px] w-[380px] rounded-xl p-5 bg-black  '> 
      <input type="text"  readOnly value={input} className='focus:outline-none w-full h-[50px] p-2 rounded-xl text-white text-3xl  bg-gray-400 ' />
      <div className=' text-white grid grid-cols-4 grid-rows-5 text-3xl gap-y-2 my-3 items-center justify-center'>
        <span className='h-[70px] w-[70px]  rounded-3xl   text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={clear}>c</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("+/-")}>+/-</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("%")}>%</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("/")}>/</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("7")}>7</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("8")}>8</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("9")}>9</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("*")}>x</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("4")}>4</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("5")}>5</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("6")}>6</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("-")}>-</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("1")}>1</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("2")}>2</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("3")}>3</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("+")}>+</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("0")}>0</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700  hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display("00")}>00</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-400 hover:bg-gray-700 hover:border-4 flex justify-center items-center cursor-pointer' onClick={()=>display(".")}>.</span>
        <span className='h-[70px] w-[70px]  rounded-3xl  text-white bg-gray-700 hover:bg-gray-400  hover:border-4 flex justify-center items-center cursor-pointer' onClick={calculator}>=</span>

      </div>
    </form>
   </div>
   </>
  )
}

export default App
