import React, { useState } from 'react'

const Forms2 = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [id, setId] = useState("")

    const [displayData, setDisplayData] = useState([])



    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const handleId = (event) =>{
        setId(event.target.value)
    }

    const formSubmit = (event)=>{
        event.preventDefault()
        setDisplayData({username,password,id})
        setUsername("")
        setPassword("")
        setId("")
    }


  return (
    <div>
       <form onSubmit={formSubmit}>
        <input type="text" value={username} placeholder='enter username..' onChange={handleUsername}/>
        <input type="text" value={password} placeholder='enter password' onChange={handlePassword}/>
        <input type="text" value={id} placeholder='enter id' onChange={handleId}/>
        <button type='submit'>Submit</button>
       </form>
       <div>
        <h4>username: {displayData.username}</h4>
        <h4>password: {displayData.password}</h4>
        <h4>id: {displayData.id}</h4>
       </div>
    </div>
  )
}

export default Forms2