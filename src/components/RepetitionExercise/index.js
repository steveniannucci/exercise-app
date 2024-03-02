import React, { useState } from 'react' 

export default function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0)
  return (
  <div>
    <p>{exercise.name}</p>
    <p style={{fontSize: "5em"}}>{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(0)}>Reset</button><br/>
    <button style={{fontSize: "1.5em"}} onClick={setMenuScreen}>Back to Menu</button>
  </div>
  )
}
