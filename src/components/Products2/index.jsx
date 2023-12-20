import React, { useEffect, useState } from 'react'
import './index.css'

const Products2 = () => {
    const[products, setProducts] = useState([])
    const [search, searchInput] = useState("")

    useEffect(()=>{
        const getData = async ()=>{
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()
            setProducts(data.products)
        }
        getData()
    },[])

    const handleDelete = (id) =>{
        const deletedData = products.filter(each => each.id !== id)
        setProducts(deletedData)
    }

    const handleSearch = (event) =>{
        searchInput(event.target.value)
    }

    const filteredData = products.filter(each => each.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className='main container-fluid'>
        <div className='d-flex justify-content-center mt-4'>
            <input type="search" value={search} onChange={handleSearch} placeholder='enter text here.....'/>    
        </div>
        {filteredData.length === 0 ? (<div className='no-data'>There is no data</div>):( <ul className='products-container row'>
        {filteredData.map(product =>{
            const {id,title,description,price,rating,brand,category,images} = product
            const imageUrl = images[0]
            return (
                <li key={id} className='col-12 col-md-6 col-lg-3'>
                   <div className='card m-2 p-3 d-flex flex-column align-items-center text-center'>
                    <img src={imageUrl} alt={title} className='product2-img'/>
                    <h4>{title}</h4>
                    <p>price: {price}</p>
                    <p>rating: {rating}</p>
                    <p>brand: {brand}</p>
                    <p>category :{category}</p>
                    <p>description:{description}</p>
                    <button className='btn btn-danger' onClick={() =>handleDelete(id)}>Delete</button>
                   </div>
                </li>
            )
        })}
       </ul>)}
    </div>
  )
}

export default Products2