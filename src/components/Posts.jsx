import React from 'react'

const Posts = ({postData, handleDelete}) => {
   const {id, title} = postData 

   const handleButton = () =>{
       handleDelete(id)
   }

  return (
    <li>
        <li>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <button onClick={handleButton}>Delete</button> 
        </li> 
    </li>
  )
}

export default Posts