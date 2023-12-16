import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count+1)
    }

    const handleDecrement = () =>{
        setCount(count-1)
    }

    const handleSetZero = () =>{
        setCount(0)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleSetZero}>Set zero</button>
    </div>
  )
}

export default Counter

