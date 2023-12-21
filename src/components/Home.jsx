import React, { useEffect, useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [userInputs, setUserInputs] = useState({
    userId:"",
    title:"",
    body:""
  })

  useEffect(() =>{
    const getData = async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setPosts(data)
    }
    getData()
  },[])

  const handleInputs = (event) =>{
    const {name,value} = event.target 
    setUserInputs({...userInputs,[name]:value})
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
   try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(userInputs)
    })
    console.log(response)

    if(response.ok){
      const responseData = await response.json()
      setPosts([...posts,responseData])
      setUserInputs({ userId:"",
      title:"",
      body:""})
      console.log("data changed  successfully", responseData)
    }else{
      console.log("data not send to server")
    }
   }catch(error){
    console.log("error is :", error)
   }
  }

  // PUT method
  // const handleSubmit = async (event) =>{
  //   event.preventDefault()
  //  try{

  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  //     method:"PUT",
  //     headers:{
  //       'Content-Type':"application/json"
  //     },
  //     body:JSON.stringify(userInputs)
  //   })
  //   console.log(response)

  //   if(response.ok){
  //     const responseData = await response.json()
  //     setPosts([...posts,responseData])
  //     setUserInputs({ userId:"",
  //     title:"",
  //     body:""})
  //     console.log("data changed  successfully", responseData)
  //   }else{
  //     console.log("data not send to server")
  //   }
  //  }catch(error){
  //   console.log("error is :", error)
  //  }
  // }


  // Delete method
  // const handleSubmit = async (event) =>{
  //   event.preventDefault()
  //  try{

  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  //     method:"DELETE",
  //   })
  //   console.log(response)

  //   if(response.ok){
  //     const responseData = await response.json()
  //     setPosts([...posts,responseData])
  //     setUserInputs({ userId:"",
  //     title:"",
  //     body:""})
  //     console.log("data changed  successfully", responseData)
  //   }else{
  //     console.log("data not send to server")
  //   }
  //  }catch(error){
  //   console.log("error is :", error)
  //  }
  // }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter id...' name='userId' value={userInputs.userId} onChange={handleInputs}/>
      <input type="text"  placeholder='enter title...' name='title' value={userInputs.title} onChange={handleInputs}/>
      <input type="text"  placeholder='enter body...' name='body' value={userInputs.body} onChange={handleInputs}/>
      <button type='submit'>Submit</button>
      </form>
      <ul>
        {posts.map(each =>(
          <li key={each.id}>
            {each.id} {each.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home