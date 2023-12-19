import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    // const navigate = useNavigate()
  return (
   <nav>
    <Link to="/"> <button>Home</button></Link>
    <Link to="/products"> <button>Products</button></Link>
    <Link to="/cart"> <button>Cart</button></Link>
    <Link to="/account"> <button>Accounts</button></Link>
   </nav>
  )
}

export default Navbar