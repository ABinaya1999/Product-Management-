import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <Link to="/" className="brand">Product management system</Link>
            <ul className="nav-links">
                {/* <li><a href="#">Home</a></li> */}
                {/* <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
            <Link to="/addproduct" className="btn">Add Product</Link>
        </div>
    </nav>
  )
}

export default Navbar