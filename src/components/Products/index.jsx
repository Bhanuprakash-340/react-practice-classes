import React, { useEffect, useState } from 'react'
import './index.css'


const Products = () => {
  const [products, setProducts] = useState([])
  const [search, searchInput] = useState("")

  useEffect(()=>{
    const getProducts = async () =>{
      const response = await fetch("https://dummyjson.com/products")
      const data = await response.json()
      console.log(data)
      setProducts(data.products)
    }
    getProducts()
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
    <div className='container-fluid'>
        <div className='col-12 d-flex flex-row justify-content-center mt-3'>
            <input type="search" className='search-bar' onChange={handleSearch} placeholder='Enter text here....'/>
        </div>
        {filteredData.length === 0 ? (<div className='text-center vh-100 d-flex justify-content-center align-items-center'>No search related Data</div>):
        ( <ul className='pages row'>
            {filteredData.map(product =>{
                const {id,title,description,price,rating,brand} = product
                const {images} = product
                const imageUrl = images[0]

                return(
                    <li key={id} className='product-container p-4 col-12 col-md-4 col-lg-3'>
                        <div className='content-container d-flex flex-column justify-content-center align-items-center p-3 text-center'>
                            <img src={imageUrl} alt={title} className='product-image'/>
                            <h2>{title}</h2>
                            <p>Brand: <span>{brand}</span></p>
                            <p>Price:  <span>{price}</span></p>
                            <p>Rating:  <span> {rating}</span></p>
                            <p>Description:  <span>{description}</span></p>
                            <button className='btn btn-danger' onClick={()=>handleDelete(id)}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>)}
    </div>
  )
}

export default Products