import React, { useState } from 'react'

const Input = () => {
  const [userInput, setUserInput] = useState("")

  const handleInput = (event) =>{
    setUserInput(event.target.value)
  }


  return (
    <div>
       <input placeholder='enter name' name="username" onChange={handleInput}/> 
       <h4>user input: {userInput}</h4>
    </div>
  )
}

export default Input