import React, { useState } from 'react'

const Forms3 = () => {
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
        setDisplayData([...displayData, {username,password,id}])
        setUsername("")
        setPassword("")
        setId("")
    }


  return (
    <div>
        <h4>Map Functionlity</h4>
       <form onSubmit={formSubmit}>
        <input type="text" value={username} placeholder='enter username..' onChange={handleUsername}/>
        <input type="text" value={password} placeholder='enter password' onChange={handlePassword}/>
        <input type="text" value={id} placeholder='enter id' onChange={handleId}/>
        <button type='submit'>Submit</button>
       </form>
       <div>
       {displayData.map(each =>(
        <div>
             <h4>username: {each.username}</h4>
            <h4>password: {each.password}</h4>
            <h4>id: {each.id}</h4>
        </div>
       ))}
       </div>
    </div>
  )
}

export default Forms3