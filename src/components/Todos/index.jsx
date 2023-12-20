import React, { useEffect, useState } from 'react'
import './index.css'

const Todos = () => {
    const [todos, setTodo] = useState([])

    useEffect(() =>{
        const getTodos = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            setTodo(data)
        }
        getTodos()
    },[])

  return (
   <div className='container-fluid'>
    <ul className='row'>
        {todos.map(each =>(
            <li className='todo-item col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='card m-3 d-flex flex-column align-items-center p-3'>
                    <h4>{each.id}</h4>
                    <p>{each.title}</p>
                    <div>
                        <button className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            </li>
        ))}
    </ul>
   </div>
  )
}

export default Todos