import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchWithInComponent = () => {
    const [posts, setPosts] = useState([])
    const [todo, setTodos] = useState([])
    const [search, setSearch] = useState('')

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

const handleSearch = (event) =>{
    setSearch(event.target.value)
}

const handlePostsSearch = () =>{
    const postsData = posts.filter(each => each.title.toLowerCase().includes(search.toLowerCase()))
    setPosts(postsData)
}

const searchData = todo.filter(each => each.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <input type="text" value={search} onChange={handleSearch} placeholder='enter text here....' />
        <button onClick={handlePostsSearch}>Search</button>
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
        <input type='search' placeholder='search here...' value={search} onChange={handleSearch}/>
        <ul>
            {searchData.map(each =>(
                <li key={each.id}>{each.title}</li>  
            ))}
        </ul>
    </div>
  )
}

export default FetchWithInComponent