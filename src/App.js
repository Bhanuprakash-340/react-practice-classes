import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
// import Account from './components/Account';
import { Routes , Route} from 'react-router-dom';
import BadPath from './components/BadPath';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos';
import Products2 from './components/Products2';
// import Responsive from './components/Responsive';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products2" element={<Products2/>}/>
      <Route path="*" element={<BadPath/>}/>
    </Routes>
    {/* <Responsive/> */}
    </>
  )
}

export default App