import React from 'react'
import SubChild from '../SubChild'

const ChildComponent = (props) => {

    // object destructuring
    const {name,age,lastName} = props


  return (
    <div>
        ChildComponent
        <h1>my name is {name} {lastName} and i am {age} old</h1>
        <SubChild skills="react" degree="MCA" name={name} />
    </div>
  )
}

export default ChildComponent