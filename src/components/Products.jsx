import React from 'react'
import Fetching from './Fetching'
import FetchWithInComponent from './FetchWithInComponent'
// import Form  from 'react-router-dom'
// import Forms1 from './Forms1'
// import Forms2 from './Forms2'
// import Forms3 from './Forms3'

const Products = () => {
  return (
    <div className='pages'>
        <Fetching/>
        <FetchWithInComponent/>
        {/* <FetchWithInComponent/>
        <Form/>
        <Forms1/>
        <Forms2/>
        <Forms3/> */}
    </div>
  )
}

export default Products