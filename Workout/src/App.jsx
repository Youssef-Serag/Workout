import { useState } from 'react'
import MainPage from './Pages/WorkoutPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainPage />
    </div>
  )
}

export default App
