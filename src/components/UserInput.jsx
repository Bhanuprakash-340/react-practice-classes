import React, { useState } from 'react'

const UserInput = () => {
   const [userInput, setUserInput] = useState("")


   const handleChange = (event) =>{
   setUserInput(event.target.value)
   }


  return (
    <div>
        <h1>UserInput : {userInput}</h1>
        <input type='text' placeholder='enter names' name="username" id="2" onChange={handleChange} value={userInput}/>
    </div>
  )
}

export default UserInput