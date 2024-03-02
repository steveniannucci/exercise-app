import React, { useState } from 'react' 

export default function ResistanceExercise({ exercise, setMenuScreen }) {
    let [count, setCount] = useState(0);
    let [weight, setWeight] = useState('');
    let [toggleState, setToggleState] = useState(false);

    const handleInputChange = (event) => {
        setWeight(event.target.value);
    }

    const handleButtonClick = () => {
        setToggleState(!toggleState);
    }

    return (
    <div>
      <p>{exercise.name}</p>
      <p style={{fontSize: "5em"}}>Weight: {weight} {toggleState ? 'kg' : 'lbs'} <button onClick={handleButtonClick}>Toggle Weight Type</button></p>
      <p style={{fontSize: "5em"}}>Reps: {count}</p>
      <p>Weight: <input type="number" value={weight} onChange={handleInputChange} /></p><br/><br/>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button><br/>
      <button style={{fontSize: "1.5em"}} onClick={setMenuScreen}>Back to Menu</button>
    </div>
    )
}
