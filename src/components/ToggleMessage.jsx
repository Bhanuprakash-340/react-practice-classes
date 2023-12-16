import React, { useState } from 'react'

const ToggleMessage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleChange = () =>{
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <div>
       <button onClick={handleChange}>login</button>
       {isLoggedIn && <h1>Welcome user</h1>}
    </div>
  )
}

export default ToggleMessage