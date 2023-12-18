import React from 'react'
import Input from './components/Input'
import Forms from './components/Forms'
import Fetching from './components/Fetching'
import FetchWithInComponent from './components/FetchWithInComponent'


const App = () => {
  return (
    <div>
      <Input/>
      <Forms/>
      <Fetching/>
      <FetchWithInComponent/>
    </div>
  )
}

export default App