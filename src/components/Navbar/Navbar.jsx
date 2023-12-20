import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'



const Navbar = () => {
  return (
   <nav className='navbar d-flex flex-row justify-content-end'>
        <div className='nav-items-container d-flex flex-row justify-content-between'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/products2">Products2</NavLink>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </div>
   </nav>
  )
}

export default Navbar