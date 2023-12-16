import React, { useState } from 'react'

const ArrayComponent = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [userInput, setUserInput] = useState("")

    const handleUserData = (event) =>{
        setUserInput(event.target.value)
    }

    const handleArrayData = () =>{
        setNumbers([...numbers,userInput])
        setUserInput("")
    }


  return (
    <div>
    <ul>
        {numbers.map(num =>(
            <li key={num}>{num}</li>
        ))}
    </ul>
     <input type='text' placeholder='enter number' value={userInput} onChange={handleUserData}/>
     <button onClick={handleArrayData}>Add Num</button>
    </div>
  )
}

export default ArrayComponent