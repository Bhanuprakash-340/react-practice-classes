import React, { useState } from 'react'

let userDetails = {
    username:"",
    password:"",
    id:""
}

const Forms = () => {
    const [userInputs, setUserInputs] = useState(userDetails)

    const [displayData, setDisplayData] = useState([])

    const handleInputs = (event) =>{
        const {name,value} = event.target 
        setUserInputs({...userInputs, [name]:value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setDisplayData([...displayData,userInputs])
        setUserInputs(userDetails)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter username.' name='username' value={userInputs.username} onChange={handleInputs}/>
            <input type="text" placeholder='Enter password....' name='password' value={userInputs.password} onChange={handleInputs}/>
            <input type="text" placeholder='Enter id..' name='id' value={userInputs.id} onChange={handleInputs} />
            <button type='submit'>Submit</button>
        </form>
        <div>
          <ul>
            {displayData.map(each =>(
                <li key={each.id}>
                    <h4>username: {each.username}</h4>
                    <h4>password: {each.password}</h4>
                    <h4>id: {each.id}</h4>
                </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Forms