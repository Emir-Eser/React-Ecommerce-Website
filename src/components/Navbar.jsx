import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({user,handleLogOut}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand " to="/">R-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to ="/">Home</NavLink>
            <NavLink className="nav-link" to ="/products">Products</NavLink>
            <NavLink className="nav-link" to ="/about">About Us</NavLink>
            <NavLink className="nav-link" to ="/contact">Contact</NavLink>
            {
              user?
              <>
              <NavLink className="nav-link" to ="/fav">Favorites</NavLink>
              <button className="nav-link" onClick={handleLogOut}> Log Out ({user.name})</button>
              </>:
              <NavLink className="nav-link" to ="/login">Login</NavLink>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar