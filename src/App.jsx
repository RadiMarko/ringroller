import Puzzle from "./components/Puzzle.jsx";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Puzzle />
    </>
  )
}

export default App
