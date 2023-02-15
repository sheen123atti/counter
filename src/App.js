import React, { useState } from 'react'
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0)
  let styl = {
    backgroundColor: ""
  }
  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    setCounter(counter - 1)
  }
    if (counter >= 0 && counter <= 4) {
      styl = { backgroundColor: "green" }
    }
    else if (counter >= 5 && counter <= 9) {
      styl = { backgroundColor: "blue" }
    }
    else if (counter === 10) {
      styl = { backgroundColor: "red" }
    }
  return (
    <div className="App">
      COUNTER
      <h1 style={styl}>{counter}</h1>
      <button onClick={increase} disabled={counter > 9 ? true : false}>Increment</button>
      <button onClick={decrease} disabled={counter < 1 ? true : false}>Decrement</button>
    </div>
  );
}
