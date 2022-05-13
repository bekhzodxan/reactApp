import React, { useState } from 'react'

function App() {

  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
      <h1>muzlatgichdagi mahsulotlar</h1>
      <button onClick={() => setIsVisible(!isVisible)}>click</button>
      {isVisible && <h2>olma, uzum, banan</h2>}
    </>
  )
}

export default App