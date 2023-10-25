import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appi from './Appi.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Appi />
    </>
  )
}

export default App
