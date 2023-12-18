import React, { useEffect, useState } from 'react'
import Posts from './Posts'

const Fetching = () => {
    const [posts, setPosts] = useState([])

useEffect(()=>{
    const getData = async () =>{
        try{
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(url)
            const data = await response.json()
            setPosts(data)
        }
        catch(error){
            console.log("this error is related to ", error)
        }
    }
    getData()
},[])

const handleDelete = (id) =>{
    const filtedData = posts.filter(each => each.id !== id)
    setPosts(filtedData)
}


  return (
    <div>
        <ul>
            {posts.map(eachPost =>(
               <Posts postData={eachPost} key={eachPost.id} handleDelete={handleDelete}/>
            ))}
        </ul>
    </div>
  )
}

export default Fetching