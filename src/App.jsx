import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Boutons à cliquer</h1>

      <div className="card">
        <Counter />
        <Counter />
        <AddCounterButton />
        <Alert />
      </div>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

function AddCounterButton() {
  const [counters, setCounters] = useState([])

  return (
    <div>
      <button onClick={() => setCounters((counters) => [...counters, 0])}>
        Add Counter
      </button>
      {counters.map((_, index) => (
        <Counter key={index} />
      ))}
    </div>
  )
}

function Alert() {
  return(
  <button onClick={() => alert('Alert Test')}>Alert</button>)
}

export default App
