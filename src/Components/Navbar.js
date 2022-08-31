import React, { useContext } from 'react'
import { Storage } from './Storage'
import classes from './styles/Navbar.module.css'

function Navbar() {
  const detail = useContext(Storage)
  return (
    <div className={classes.nav}>
      <div>
        <h1 style={{margin:'0',padding:'0'}}><span style={{color:'blue',fontSize:'3rem'}}>T</span><span style={{color:'green',fontSize:'3rem'}}>o</span><span style={{color:'yellow',fontSize:'3rem'}}>y</span ><span style={{color:'red',fontSize:'3rem'}}>s</span><span style={{color:'grey',fontSize:'3rem',fontWeight:'200'}}>Store</span></h1>
      </div>
      <div className={classes.search}>
        <input onChange={(event)=>detail.srch(event.target.value.toLowerCase())} placeholder='seacrh an item'/>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Navbar