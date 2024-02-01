import { useState } from 'react';
import './App.css'

function App() {
  let [value, setValue ]= useState(0)
 const addValue = ()=> {
    //setValue (value + 1 );
    setValue ((prevValue) => prevValue + 1 );
    setValue ((prevValue) => prevValue + 1 );

 }
 const removeValue = ()=> {
  if(value > 0)setValue(value - 1);
 }
  return ( 
    <>
      <h1>Value: {value}</h1>
      <button onClick={addValue}>Add Value: </button>
      <button onClick={removeValue}>Remove Value:</button>

    </>
  )
}

export default App
