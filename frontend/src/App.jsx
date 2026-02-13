import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="text-2xl font-bold text-blue-600">project</div>
      <Home />
    </>
  )
}

export default App
