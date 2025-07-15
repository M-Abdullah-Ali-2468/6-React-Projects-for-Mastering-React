import { useState } from 'react'

import StarRating from './StarRating'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StarRating />
    </>
  )
}

export default App
