import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import './Styles.css'

const Fetching = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")

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

const handleSearch = (event) =>{
    setSearch(event.target.value)
}

const searchData = posts.filter(each => each.title.toLowerCase().includes(search.toLowerCase()))


  return (
         <div>
            <input type="text" value={search} onChange={handleSearch}/>
         {searchData.map(eachPost =>(
               <Posts postData={eachPost} key={eachPost.id} handleDelete={handleDelete}/>
            ))}
    </div>    
  )
}


export default Fetching