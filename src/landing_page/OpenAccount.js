import React from 'react'
import { Link } from 'react-router-dom';
function OpenAccount() {
    return (
      <div className='container p-5 mb-5'>
      <div className='row text-center'>
          <h1 className='mt-5'>Open a StockZen account</h1>
          <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <Link to="/singup" className="btn btn-primary p-20 fs-5 mb-5" style={{width:"25%", margin:"0 auto"}}>
                    Signup for Free
                </Link>
      </div>

  </div>      );
}

export default OpenAccount;