import { useState } from 'react'

import './App.css'

function App() {
  const [car, setCar] = useState({
    color:"blue"
  })
  const [count, setCount] = useState(0)
  const [number,setnumber]=useState();

  const cube=()=>{
    console.log("the Calculation is Done");
    return Math.pow(number,3);
    
  }
  
  return (
    <>
     <h2>hello My car is {car.color} </h2>
     {/* <button onClick={() => setCar((prev) => ({ ...prev, color: "red" }))}>
       Submit
     </button> */}


     {/* <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
     <h1> value {count}</h1>
     <button onClick={() => setCount((prev) => prev - 1)}>-1</button> */}
    <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}/>
    <h2>The cube of Number is :{cube(number)}</h2>{}


    </>
  )
}

export default App
