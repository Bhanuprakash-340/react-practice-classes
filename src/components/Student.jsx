import React from 'react'

const Student = (props) => {
    const {studentData} = props
    const {id,name,age,skills,imageUrl} = studentData
  return (
    <li key={id}  className='each-student'>
    <p>{id}</p>
    <h2>{name}</h2>
    <img src={imageUrl} alt={name} />
    <h2>{skills}</h2>
    <p>{age}</p>
   </li>
  )
}

export default Student