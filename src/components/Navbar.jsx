import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary   ">
  <div className="container-fluid">
    <NavLink className="navbar-brand  " to="/Home"><span className='fs-2 fw-bold'>Shopiee</span><p className='fst-italic text-danger  mx-2' >Be our's fav always</p></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse py-4 " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0  fs-3 ">
        <li className="nav-item ">
          <NavLink className="nav-link  fw-semibold text-light" aria-current="page" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fw-semibold text-light " aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fw-semibold text-light" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold text-light" aria-current="page" to="/Products">Products</NavLink>
        </li>
       
          </ul>
      
    </div>
    
    <button type="button" className="btn btn-success btn-lg ">Cart</button>
  </div>
</nav>

  )
}

export default Navbar