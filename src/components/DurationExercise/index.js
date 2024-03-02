import Stopwatch from '../Stopwatch';

export default function DurationExercise({ exercise, setMenuScreen }) {
  let {name} = exercise
  return <div>
    <p>{name}</p>
    <Stopwatch/>
    <button style={{fontSize: "1.5em"}} onClick={setMenuScreen}>Back to Menu</button>
    </div>
}