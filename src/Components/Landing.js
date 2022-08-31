import React, { useState } from 'react'
import Caro from './Caro'
import HLightedProducts from './HLightedProducts'
import Reviews from './Reviews'

function Landing() {
  const [user,setUser] = useState('')
  return (
    <div>
        <Caro />
        <HLightedProducts />
        <Reviews />
    </div>
  )
}

export default Landing