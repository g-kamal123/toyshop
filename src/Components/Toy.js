import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Footer from './Footer'
import Landing from './Landing'
import Navbar from './Navbar'
import Navigation from './Navigation'
import Products from './Products'

function Toy() {
  return (
    <div>
        <Navbar />
        <Navigation />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path ='/store' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
        {/* <Landing />
        <Products /> */}
        <div style={{position:'fixed',bottom:'1rem',right:'1rem',fontSize:'2.9rem',color:'red',cursor:'pointer'}}>
      <i className="fa-solid fa-angles-up" onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}}></i>
      </div>
    </div>
  )
}

export default Toy