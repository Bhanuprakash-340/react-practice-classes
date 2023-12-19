import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Account from './components/Account';
import { Routes , Route} from 'react-router-dom';
import BadPath from './components/BadPath';
import Navbar from './components/Navbar';
import Responsive from './components/Responsive';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="*" element={<BadPath/>}/>
    </Routes>
    <Responsive/>
    </>
  )
}

export default App