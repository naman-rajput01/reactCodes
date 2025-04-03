import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  
  const addValue = () => { console.log("Clicked "+count); setCount(count + 1); 
    console.log(count)
  }
  const subValue = () => {console.log("Clicked "+count); setCount(count - 1); 
    console.log(count)
  }

  return (
    <>
      <h1>Chai and react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={subValue}>Subtract Value {count}</button>
    </>
  )
}

export default App
