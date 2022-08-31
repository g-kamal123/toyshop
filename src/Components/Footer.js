import React from 'react'
import classes from './styles/Footer.module.css'

function Footer() {
  return (
    <div className={classes.footer}>
      <span>Terms & Conditions</span>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <span>@Copyright 2002: Toy store</span>
    </div>
  )
}

export default Footer