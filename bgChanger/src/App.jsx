
import { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('olive');
  return (
    <div className='w-full h-screen duration-200 m-0 p-0' 
    style={{backgroundColor: bgColor}}>
      <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-0' style={{}}>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
          {/* <button className='bg-olive-500   hover:bg-olive-600 text-black font-bold py-2 px-4 rounded' onClick={() => setBgColor('white')}>White</button> */}
          <button className='bg-red-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl' onClick={() => setBgColor('red')}>Red</button>
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl' onClick={() => setBgColor('green')}>Green</button>
          <button className='bg-blue-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl' onClick={() => setBgColor('blue')}>Blue</button>
          <button className='bg-yellow-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-xl' onClick={() => setBgColor('yellow')}>Yellow</button>
          <button className='bg-white-500 hover:bg-emerald-600 text-black font-bold py-2 px-4 rounded-xl' onClick={() => setBgColor('white')}>White</button>

        </div>
      </div>
    </div>
  )
}

export default App
