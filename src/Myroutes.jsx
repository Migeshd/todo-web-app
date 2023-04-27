import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Forms from './components/pages/Forms'

const Myroutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/form' element={<Forms/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Myroutes