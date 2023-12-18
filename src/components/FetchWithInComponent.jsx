import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchWithInComponent = () => {
    const [posts, setPosts] = useState([])
    const [todo, setTodos] = useState([])

useEffect(()=>{
    const getData = async () =>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)

        const url2 = "https://jsonplaceholder.typicode.com/todos"
        const response2 = await axios.get(url2)
        const data2 = response2.data
        setTodos(data2)
       
    }
    getData()
},[])

const handleDelete = (id) =>{
    const filtedData = posts.filter(each => each.id !== id)
    setPosts(filtedData)
}


  return (
    <div>
        <h1>Data populating with in the component</h1>
        <ul>
            {posts.map(eachPost =>(
              <li key={eachPost.id}>
                 <h4>{eachPost.id}</h4>
                <h4>{eachPost.title}</h4>
                  <button onClick={()=>handleDelete(eachPost.id)}>Delete</button> 
              </li>
            ))}
        </ul>

        <h1>Todos data</h1>
        <ul>
            {todo.map(each =>(
                <li key={each.id}>{each.title}</li>  
            ))}
        </ul>
    </div>
  )
}

export default FetchWithInComponent