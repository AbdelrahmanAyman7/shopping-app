import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import logo1 from '../../src/images/carts.png'

const Header = () => {
  

    return (
     <header>
      <nav className = "myNav">
       <Link className = "homeLink" to = "/">
       <h2>Amazon</h2>
       </Link>
       <Link className = "cartLink" to = "/Cart">
       <div className = "logoContainer">
       <img className = "logo" src = {logo1} alt = "./"></img>
       </div>
       </Link>
      </nav>
     </header>
     
    )
}

export default Header
