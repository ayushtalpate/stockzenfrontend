import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundClip:"#fff"}}>
        <div className="container-fluid mb-2">
          <Link className="navbar-brand" to={"/"}>
            <img src='media/images/logo-removebg-preview.png' style={{width:"30%"}} alt='logo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            <li className="nav-item ">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={"/about"}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to={"/pricing"}>Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/support"}>Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/singup"}>Signup</Link>
              </li> <li className="nav-item ">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              
             
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;