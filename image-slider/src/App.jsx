import { useState } from 'react'
import ImageSlider from './ImageSlider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider/>
    </>
  )
}

export default App
