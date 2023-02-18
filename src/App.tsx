import { useState } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <GameBoard />
    </div>
  )
}

export default App
