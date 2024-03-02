import '../src/App.css';
import React, { useCallback, useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import ResistanceExercise from './components/ResistanceExercise';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERICISE = "duration"
const REPETITION_EXERCISE = "repetition"
const RESISTANCE_EXERCISE = "resistance"

let exerciseList = [
  {type: REPETITION_EXERCISE, name: "Push Ups"},
  {type: DURATION_EXERICISE, name: "Bicycling"},
  {type: REPETITION_EXERCISE, name: "Sit Ups"},
  {type: DURATION_EXERICISE, name: "Running"},
  {type: DURATION_EXERICISE, name: "Planks"},
  {type: RESISTANCE_EXERCISE, name: "Resistance"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  }, [])

  if(currentScreen === MENU_SCREEN) {
    screenComponent = (
    <div>
      <p>Exercise App</p><br/>
      <ul>
        {exerciseList.map(({ type, name }) => {
          return <li key={name}><br/>
            <button onClick={() => buttonClick({type, name})}>{name}</button>
          </li>
        })}
      </ul>
    </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case REPETITION_EXERCISE:
        screenComponent = ( <RepetitionExercise
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          exercise={currentExercise} />
        );
        break;
      case DURATION_EXERICISE:
        screenComponent = ( <DurationExercise
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)} 
          exercise={currentExercise} />
        );
        break;
      case RESISTANCE_EXERCISE:
        screenComponent = ( <ResistanceExercise
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)} 
          exercise={currentExercise} />
        );
        break;
      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      {screenComponent}
    </div>
  );
}

export default App;
