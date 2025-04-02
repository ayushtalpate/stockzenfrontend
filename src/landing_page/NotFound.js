import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
      <div className='container p-5 mb-5'>
      <div className='row text-center'>
          <h1 className='mt-5'>404 Page not Found</h1>
          <p className='mt-3'>Error, Page not Found you enter wrong path ...!</p>
          <button type="button" className="btn btn-primary p-15 fs-7 mb-5 mt-3" style={{width:"25%", margin:"0 auto"}}>
            <Link className="nav-link" to={"/"}>Go to Home</Link>
          </button>
      </div>

  </div>      );
}

export default NotFound;