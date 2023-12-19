import React, {useContext} from 'react'
import { UserDetails } from '../App'

const Child4 = () => {

    const data = useContext(UserDetails)
    console.log(data)
  return (
    <div>
        <h1>username : {data}</h1>
    </div>
  )
}

export default Child4