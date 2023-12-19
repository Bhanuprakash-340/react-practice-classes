import React from 'react'

const Posts = ({postData, handleDelete}) => {
   const {id, title} = postData 

   const handleButton = () =>{
       handleDelete(id)
   }

  return (
        <li className='posts-items'>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <button onClick={handleButton} className='btn btn-primary'>Delete</button> 
        </li> 
  )
}

export default Posts